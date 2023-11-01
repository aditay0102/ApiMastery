import React, { useState } from 'react'
import clear_icon from '../WeatherApp/assets/clear.png'
import cloud_icon from '../WeatherApp/assets/cloud.png'
import drizzle_icon from '../WeatherApp/assets/drizzle.png'
import humidity_icon from '../WeatherApp/assets/humidity.png'
import rain_iocn from '../WeatherApp/assets/rain.png'
import search_icon from '../WeatherApp/assets/search.png'
import snow_icon from '../WeatherApp/assets/snow.png'
import wind_icon from '../WeatherApp/assets/wind.png'
import { queries } from '@testing-library/react'

const WeathreApp = () => {
  let api_key = "df9a0257e6d39ba4c4a92141b239ebc6";
  const [wicon,setWicon] = useState(cloud_icon);


    let humidity = 0;
    let wind = 0;
    let temperature = '~';
    let location = "location";

    const search = async () => {
    console.log("clicked")
    const element = document.querySelectorAll(".search");
    if(element[0].value === ""){
      console.log("its empty");
      return;
    }
    
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;
    
      let responce = await fetch(url);
      let data = await responce.json();

      if(responce.ok){
        console.log(data.name);
        const humidity = document.querySelectorAll(".humidity_percent");
        const wind  = document.querySelectorAll(".wind-rate");
        const temperature = document.querySelectorAll(".weather_temp");
        const location = document.querySelectorAll(".location");
  
        
        humidity[0].innerHTML =   data.main.humidity+" %";
        wind[0].innerHTML = data.wind.speed+" Km/h";
        temperature[0].innerHTML = data.main.temp+" °C";
        location[0].innerHTML = data.name;
  
        if(data.weather[0].icon === '01d' || data.weather[0].icon === '01n'){
          setWicon(clear_icon);
        }
        else if(data.weather[0].icon === '02d' || data.weather[0].icon === '02n'){
          setWicon(cloud_icon);
        }
        else if(data.weather[0].icon === '03d' || data.weather[0].icon === '03n'){
          setWicon(drizzle_icon);
        }
        else if(data.weather[0].icon === '04d' || data.weather[0].icon === '04n'){
          setWicon(drizzle_icon);
        }
        else if(data.weather[0].icon === '09d' || data.weather[0].icon === '09n'){
          setWicon(rain_iocn);
        }
        else if (data.weather[0].icon === '10d' || data.weather[0].icon === '10n'){
          setWicon(rain_iocn);
        }
        else if(data.weather[0].icon === '13d' || data.weather[0].icon === '13n'){
          setWicon(snow_icon)
        }
        else{
          setWicon(clear_icon);
        }

      }
      else{
        alert("Invalid location");
        window.location.reload();
      }

  




    }

    return (  
      <div className='container'>
          <div className='top-bar'>
            <input className='search' type='text' placeholder='Search' />
            <div className="Search_icon" onClick={search}>
              <img className='search_image' src={search_icon} alt='' />
            </div>
          </div>
          <div className='weather_image'>
            <img src={wicon} alt='' />
          </div>
          <div className='weather_temp'>{temperature}</div>
          <div className='location'>{location}</div>
          

          <div className='extra'> 
            <div className="data-container">
              <div className="element">
                <img src={humidity_icon} alt='' className='icon'/>
                <div className='data'>
                  <div className="humidity_percent">{humidity}</div>
                  <div className="text">Humidity</div>
                </div>
              </div>
            </div>
          


            <div className="data-container">
              <div className="element">
                <img src={wind_icon} alt='' className='icon'/>
                <div className='data'>
                  <div className="wind-rate">{wind}</div>
                  <div className="text">Wind Speed</div>
                </div>
              </div>
            </div>

          </div>
          
      </div>
  )
}

export default WeathreApp