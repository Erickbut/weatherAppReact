import React, { useState } from 'react'

const WeatherCard = ({ weather, temperature }) => {

    const [isCelsius, setIsCelsius] = useState(true)
    //
    const changeTemperature = () => setIsCelsius(!isCelsius)

    console.log(weather)
    return (
        <article className="card">
            <h1 className='card-title'>Weather App</h1>
            <h3 className='temp_title'>Location: </h3>

            <h2 className='card_subtitle'>{`${weather?.name}, ${weather?.sys.country}`}</h2>
            <section className='card_first-section'>
                <img className='card_icon' src={weather && /*?*/`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`} alt="" />
                <h3 className='temp_title'>Temperature: </h3>
            </section>
            <section className='card_second-section'>
                <h2 className='second_title'>Sky Status:</h2>
                <h3 className='third_title'>►{weather?.weather[0].description}</h3>
                <ul className='second_list'>
                    <li className='second_item'><span className='second_spam'>Wind Speed: </span>{weather?.wind.speed}m/s</li>
                    <li className='second_item'><span className='second_spam'>Clouds: </span>{weather?.clouds.all} %</li>
                    <li className='second_item'><span className='second_spam'>Pressure: </span>{weather?.main.pressure} hPa</li>
                </ul>
            </section>
            <h2 className='result-title'>{isCelsius ? `${temperature?.celsius}` + " ºC" : `${temperature?.farenheit}` + " ºF"}</h2>
            <button className='card_btn' onClick={changeTemperature}>{isCelsius ? 'Change to imperial ºF' : 'Change to metric ºC'}</button>
        </article>)
}
export default WeatherCard