import React, { useState } from 'react';

import Languages from './components/Languages';
import Field from './components/Field';
import Translate from './components/Translate';

function App() {
  const [language, setLanguage] = useState<string>('es');
  const [text, setText] = useState<string>('');

  return <div></div>;
}

export default App;
