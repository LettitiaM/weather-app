import React from 'react';
import Weather from "./Weather"
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <h1>Weather App</h1>
        <Weather defaultCity="Johannesburg"/>
        <footer>This project was coded by {" "} <a href=''>Lettitia</a> and is open source on {" "}<a href=''>Github</a></footer>
      </div>
    </div>
  );
}

export default App;
