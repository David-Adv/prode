import './App.css';
import React, { useEffect, useState } from 'react';

import Tabla from './components/Tabla';
import createData from './utils/CreateData';
function App() {
 

  return (
    <>
   
   <h1>Prode!</h1>

      <Tabla></Tabla>
      {/* {<UserData></UserData>()} */}

    </>
  );
}

export default App;
