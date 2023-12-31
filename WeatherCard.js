import React, { useState,useEffect } from "react";

const WeatherCard = ({ weather }) => {
  const {temp,pressure,humidity,speed,country,sunrise,name,weatherMood,} = weather;
  const [weatherState, setWeatherState] = useState("");

 
  useEffect(() => {
    if(weatherMood){
        switch (weatherMood) {
            case "Clouds":
                setWeatherState("wi-day-cloudy");
                break;
              case "Haze":
                setWeatherState("wi-day-haze");
                break;
              case "Clear":
                setWeatherState("wi-day-sunny");
                break;
              case "Mist":
                setWeatherState("wi-dust");
                break;
        
            default:
                setWeatherState("wi-day-sunny");
                break;
        }
    }
  }, [weatherMood])
  


  // convert seconds into time
  let seconds = sunrise;
  let date = new Date(seconds * 1000);  // to get milliseconds
  let sunriseTime = `${date.getHours()} : ${date.getMinutes()}`; 
  return (
    <>
      <article className="widget">
        <div className="weatherIcon">
          <i className={`wi ${weatherState}`}></i>
        </div>
        <div className="weatherInfo">
          <div className="temperature">
            <span>{temp}&deg;</span>
          </div>
          <div className="description">
            <div className="weatherCondition">{weatherMood}</div>
            <div className="place">
              {name}, {country}
            </div>
          </div>
        </div>
        <div className="date">{new Date().toLocaleString()}</div>

        {/* Our 4-column section */}
        <div className="extra-temp">
          <div className="temp-info-minmax">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-sunset"}></i>
              </p>
              <p className="extra-info-leftside">
                {sunriseTime} AM <br /> Sunrise
              </p>
            </div>
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-humidity"}></i>
              </p>
              <p className="extra-info-leftside">
                {humidity} <br /> Humidity
              </p>
            </div>
          </div>
          <div className="weather-extra-info">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-rain"}></i>
              </p>
              <p className="extra-info-leftside">
                {pressure} <br /> Pressure
              </p>
            </div>
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-strong-wind"}></i>
              </p>
              <p className="extra-info-leftside">
                {speed} <br /> Speed
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default WeatherCard;
