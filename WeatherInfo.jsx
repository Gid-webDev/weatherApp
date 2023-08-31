import React from 'react'
import {BsSearch} from 'react-icons/bs'

const Weather_Info = ({query, setQuery, weather, setWeather, GetWeather}) => {

    

    const backgroundStyle ={
        display: 'grid',
        placeItems: 'center',
        justifyContent: 'space-evenly',
    }

    const headerStyle = {
      position: 'relative', color: 'white'}

    const BrandName = {
      fontSize: '25px', textShadow: '2px 4px rgba(0, 0, 0, 0.7)', fontWeight: '500',
      
    }
    const headContainer = {placeItems: 'center', textAlign:'center'}
    const inputContainer = { backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '5px 10px',
    color: ' rgb(233, 233, 233)', borderRadius: '50px', boxShadow: '2px 3px rgba(0, 0, 0, 0.65)',
    display:'flex', justifyContent:'space-between', alignItems:'center'
    }
    const inputStyle = {padding: '0px 4px', width: '50vw', border: 'none',
    fontSize: '16px', Appearance: 'none', color: 'white', outline: 'none', 
    backgroundColor:'transparent', fontWeight: '100', 
  }
  const searchBtn = {cursor: 'pointer', padding: '7px ', fontSize: '18px', color:'black',
  backgroundColor:'rgba(255, 255, 255, 1)', display:'flex', borderRadius:'50%'
 }
  const bodyStyle = { width: '80vw', position: 'relative', backgroundColor: '',
   margin:'-39px 0 25px 0', display:'grid', placeItems: 'center', color: 'white'}
   const location = {fontSize:'32px', fontWeight: '700'}
   const temprature = { fontSize: '60px', fontWeight: '800',
    padding: '12px 25px', borderRadius: '10px', color: 'white',
   }
   const footerContainer = {width: '95vw', }
   const weatherFeatures = {display: 'flex', justifyContent: 'space-between', backgroundColor: 'rgba(0, 0, 0, 0.5)',
   color: 'white', boxShadow: '3px 4px rgba(0, 0, 0, 1)', borderRadius: '10px',
   textAlign: 'center', fontSize: '17px', padding: '0 20px'
   }
 

  return (
    <div style={backgroundStyle} className='backgroundStyle'>
    {/*header section */}
     <section style={headerStyle} className='head'>
      <div style={headContainer}>
      <span style={BrandName} className='BrandName'>Weather Today</span> <br/>
      <div style={inputContainer} className='inputContainer'>
      <input style={inputStyle}
      type='text' placeholder='Enter location...'
      value={query} onChange={(e) => setQuery(e.target.value)}/>
      <span style={searchBtn} onClick={()=> GetWeather(query)}> <BsSearch/> </span>
      </div>
      </div>
     </section>
     {/* Location and temperature */}
     {weather.main&& 
      <section className='body' style={bodyStyle}>
      <p className='location' style={location}> 
       {weather.name} {weather.sys.country}
      </p> 
      <span>
       {weather.weather[0].main}, Feels like {weather.main.feels_like}°f
      </span>
      <div className='temp'style={temprature}>{Math.round(weather.main.temp) }°F</div>
     </section>}
     {/* Footer section */}
     {weather.weather&& <section className='footerContainer' style={footerContainer}>
     <div className='weather-features' style={weatherFeatures}> 
     <section>
     <p> {weather.wind.speed} mph</p>  <h5>Wind Speed</h5>
     </section>
     <section>
     <p> {weather.weather[0].description} </p>  <h5>Atmosphere</h5>
     </section>
     <section>
     <p> {weather.main.humidity} %</p>  <h5>humidity
     </h5>
     </section>
     </div>
    </section>}
     
    </div>
  )
}

export default Weather_Info
