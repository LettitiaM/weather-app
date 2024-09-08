import React, { useState } from "react";

export default function WeatherTemperature(props){
    let [unit, setUnit] = useState("celsius")
    
    function convertFahrenheit(event){
        event.preventDefault();
        setUnit("fahrenheit")

    }

    function convertCelcius(event){
        event.preventDefault();
        setUnit("celcius")
    }

    if (unit ==="celsius"){
        return (<div className="WeatherTemperature">
            <span className="temperature">
                {Math.round(props.celsius)}  
            </span>
            <span className="unit">°C | {" "} <a onClick={convertFahrenheit}>°F</a> </span>
        </div>)
    }else{
        let fahrenheit = (props.celsius)- 32 * 5/9 
        return (<div className="WeatherTemperature">
            <span className="temperature">
                {Math.round(fahrenheit)}  
            </span>
            <span className="unit"><a  onClick={convertCelcius}>°C</a> | {" "} °F </span>
        </div>)
    }
   
}