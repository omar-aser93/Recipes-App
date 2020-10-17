/* eslint-disable react/jsx-pascal-case */
// importing the files 

import React from 'react';
import './App.css';
import Getting_api from './components/Getting_api'

// function to pass the components to (index.js) which will render this file into index.html
function App() {
  return (
    <div className="App">
     <Getting_api />
    </div>
  );
}

export default App;
