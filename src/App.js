import React from 'react';
import './App.css';
import Navbar from './Navbar';
import About from './About';
import Resume from './Resume';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <About/>
      <Resume/>
      <h1>App</h1>
    </div>
  );
}

export default App;
