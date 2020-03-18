import React from 'react';
import Login from './components/Login'
import Pay from './components/Pay/Pay'

import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

function App() {
  return (
    <div className="App">
      {/* <Login/> */}
      <Pay/>
    </div>
  );
}

export default App;
