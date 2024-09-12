import React, {useState, useEffect} from "react";
import WeatherForecastDay from "./WeatherForecastDay"
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
    useEffect(()=>
    {setLoaded(false);},[props.coordinates]
);

    if (loaded){
       return(
        <div className="WeatherForecast">
            <div className="row">
                {forecast.map(function(dailyForecast, index){
                    if (index < 6){
                        return (
                            <div className="col" key={index}>
                                <WeatherForecastDay data={dailyForecast}/>
                            </div>
                        )
                    }
                })}
                
            </div>
        </div>
       ) 
      
    }else{
        let apiKey="b9ba0314a93083136d968577c718e31d";
        let lat = props.coord.lat;
        let long = props.coord.lon;
        let apiUrl=`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);

        return "loading....";
       
        }}