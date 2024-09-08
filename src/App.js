import React from 'react';
import Weather from "./Weather"
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <h1>Weather App</h1>
        <Weather defaultCity="Johannesburg"/>
        <footer>This project was coded by {" "} <a href='www.linkedin.com/in/lettitia-mokubung-6412b5180

'>Lettitia</a> and is open source on {" "}<a href='https://github.com/LettitiaM/weather-app'>Github</a></footer>
      </div>
    </div>
  );
}

export default App;
