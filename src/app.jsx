import React from 'react';

import { Example } from './components/Example/Example.tsx';

export const App = () => {
  const title = 'React Webpack Boilerplate';
  
  return <div>{title}<Example propOne="first" propTwo="second" /></div>;
}
