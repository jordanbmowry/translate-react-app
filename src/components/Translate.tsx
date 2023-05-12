import React, { useEffect, useState } from 'react';
import axios, { CancelTokenSource } from 'axios';

interface Props {
  language: string;
  text: string;
}

function Translate({ language, text }: Props) {
  const [translated] = useTranslation(text, language);

  return (
    <div className='translate'>
      <label className='label'>Output</label>
      <h1 className='title'>{translated.replace('&#39;', "'")}</h1>
    </div>
  );
}

const useTranslation = (text: string, language: string) => {
  const [translated, setTranslated] = useState('');

  useEffect(() => {
    if (!text) {
      return;
    }

    const cancelToken = axios.CancelToken.source();

    doTranslation(text, language, cancelToken, setTranslated);

    return () => {
      try {
        cancelToken.cancel();
      } catch (err) {}
    };
  }, [text, language]);

  return [translated];
};

const debounce = (fn: (...args: any[]) => unknown) => {
  let id: ReturnType<typeof setTimeout> | null = null;

  return (...args: any[]) => {
    if (id) {
      clearTimeout(id);
    }
    id = setTimeout(() => {
      fn(...args);
      id = null;
    }, 300);
  };
};

const doTranslation = debounce(
  async (
    input: string,
    languageCode: string,
    cancelToken: CancelTokenSource,
    callback: (...args: any[]) => unknown
  ) => {
    try {
      const { data } = await axios.post(
        'https://translation.googleapis.com/language/translate/v2?key=AIzaSyCf0Xy0OnhxlduyEt3K8zP-sOuu-l_u6uA',
        {
          q: input,
          target: languageCode,
        },
        { cancelToken: cancelToken.token }
      );

      callback(data.data.translations[0].translatedText);
    } catch (err) {
      callback('');
    }
  }
);

export default Translate;
