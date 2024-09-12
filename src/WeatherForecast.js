import React, {useState} from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css"
import axios from "axios";

export default function WeatherForecast(props){
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    function handleResponse(response){
        console.log(response.data)
        setLoaded(true)
        setForecast(response.data.daily)
    }

    
    if (loaded){
        return (<div className="WeatherForecast">
            <div className="row">
                <div className="col">
                    <div className="WeatherForecast-day">
                        {forecast[0].dt}
                    </div>
                    <WeatherIcon code={forecast.weather.icon} width={36} height={36}/>
                    <div className="WeatherForecastTemperature">
                        <span className="WeatherForcast-max">{forecast[0].temp.max}°</span> 
                        <span className="WaetherForecast-min">{forecast[0].temp.min}°</span>
                    </div>
                </div>
            </div>
        </div>)
    }else{
        let apiKey="b9ba0314a93083136d968577c718e31d";
        let lat = props.coordinates.lat;
        let long = props.coordinates.lon;
        let apiUrl=`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
        return null;
       
        }}