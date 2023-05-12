import './styles.css';
import React, { useState } from 'react';
import Languages from './components/Languages';
import Field from './components/Field';
import Translate from './components/Translate';

function App() {
  const [language, setLanguage] = useState<string>('es');
  const [text, setText] = useState<string>('');

  return (
    <div>
      <Field value={text} onChange={setText} />
      <Languages language={language} onLanguageChange={setLanguage} />
      <Translate text={text} language={language} />
    </div>
  );
}

export default App;
