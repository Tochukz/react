import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Router  from './Router';

import './App.scss';

function App() {
  return (
    <>
     <BrowserRouter>
       <Router />
     </BrowserRouter>
    </>
  );
}

export default App;