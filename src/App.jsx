import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import WeatherCard from './components/WeatherCard'

import './App.css'
import Loading from './components/Loading'

function App() {

  const [coords, setCoords] = useState()
  const [weather, setWeather] = useState()
  const [temperature, setTemperature] = useState()


  useEffect(() => {
    //esta es la funcion que se ejecuta cuando llega la informacion de nuestra ubicacion
    const success = pos => {
      const obj = {
        lat: pos.coords.latitude,
        lon: pos.coords.longitude,
      }
      setCoords(obj);
    }
    //esto hace el llamado a la api del navegador para usar la ubicacion actual
    navigator.geolocation.getCurrentPosition(success)
  }, [])

  // console.log(coords)

  //----------Peticion del clima -------------

  useEffect(() => {
    if (coords) {
      const APIKEY = '1d5bb9acf47bd77bab7b0d73db3265e1'
      const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${APIKEY}`
      axios.get(URL)
        .then(res => {
          //estado especifico para guardar la temperatura
          const celsius = (res.data.main.temp - 273.15).toFixed(1)
          const farenheit = (celsius * 9 / 5 + 32).toFixed(1)
          setTemperature({ celsius, farenheit })
          setWeather(res.data)
        })
        .catch(err => console.log(err))
    }
  }, [coords])


  return (
    <div className="App">
      {
        weather ?
          <WeatherCard weather={weather} temperature={temperature} />
          :
          <Loading />
      }    </div>
  )
}

export default App
