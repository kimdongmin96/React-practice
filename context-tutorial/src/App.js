import ColorBox from './ColorBox';
import React from 'react';
import ColorContext, { ColorProvider } from './color';
import SelectColors from './SelectColors';

const App = () => {
  return (
    <ColorProvider>
      <div>
        <SelectColors />
        <ColorBox />
      </div>
    </ColorProvider>
  );
};

export default App;
