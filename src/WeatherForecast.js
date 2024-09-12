import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css"
import axios from "axios";

export default function WeatherForecast(props){
    function handleResponse(response){
        console.log(response.data)
    }

    let apiKey="b9ba0314a93083136d968577c718e31d";
    let lon = props.coordinates.lon;
    let lat = props.coordinates.lat;
    let apiUrl=`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

return (<div className="WeatherForecast">
    <div className="row">
        <div className="col">
            <div className="WeatherForecast-day">
               Tue 
            </div>
            <WeatherIcon code="03n" width={36} height={36}/>
            <div className="WeatherForecastTemperature">
                <span className="WeatherForcast-max">7°</span> 
                <span className="WaetherForecast-min">5°</span>
            </div>
        </div>
    </div>
</div>)

}