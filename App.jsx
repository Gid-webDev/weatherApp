import React, { useEffect, useState } from 'react'
import Weather_Info from './WeatherInfo'
import './App.css'
import axios from 'axios'




const App = () => {
  const [weather, setWeather] = useState({})
  const [query, setQuery] = useState('')

  const Api = {
    Url: `https://api.openweathermap.org/data/2.5/weather?q=${query}`,
    Key: `c46a376d3de5f98318a5cb2e3ac679ce`
  }
  
  
  
  const GetWeather = async () => {
     const {data} = await axios.get(`${Api.Url}&appid=${Api.Key}`,{
      params: {
        units: 'imperial'
      }
     })
     console.log(data);
     setWeather(data);
     setQuery('');
  }


  useEffect(()=>{
    GetWeather()
  },[])
  return (
    <div style={{width: '100vw', height: '100vh'}}>
      <Weather_Info query={query} setQuery={setQuery} weather={weather} setWeather={setWeather}
      GetWeather={GetWeather}/>
    </div>
  )
}

export default App
