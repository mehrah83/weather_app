import React, { useState, useEffect } from 'react'
import "./Temp.css";
import WeatherCard from './WeatherCard';
const Temp = () => {
    const [search,setSearch] = useState("Noida");
    const [weather,setWeather] = useState({});

    const handleOnChange = (e) => {
         setSearch(e.target.value);
    }

    const getWeatherInfo = async () => {
       try{
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=5a8dd186e4339f13ba18ec40ddeca3d0`;
    const response = await fetch(url);
    const data = await response.json();
    const {temp,pressure,humidity} = data.main;
    const {speed} = data.wind;
    const {country,sunrise} = data.sys;
    const {name} = data;
    const {main: weatherMood} = data.weather[0];



    const myWeatherInfo = {
        temp,pressure,humidity,speed,country,sunrise,name,weatherMood
    }
    setWeather(myWeatherInfo);
       }
       catch(error){
           console.log(error)
       }
    }

    
    

    useEffect(() => {
      getWeatherInfo();
    }, [])
    
  return (
    <>
    <div className="wrap">
        <div className="search">
            <input type="search" className='searchTerm'  id="Search" autoFocus value={search} onChange={handleOnChange}/>
            <button className="searchButton" type='button' onClick={getWeatherInfo}>Search</button>
        </div>
    </div>

    {/* Our Temperature Card */}
   <WeatherCard weather={weather}/>
    </>
  )
}

export default Temp;
