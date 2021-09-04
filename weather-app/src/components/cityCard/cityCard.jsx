import React from 'react'
import './cityCard.scss'

const CityCard = ({cityData, handleClick, hourly}) => {

    const date = new Date(cityData.dt * 1000);
    const day = date.toDateString().split(' ')[0]
    return (
        <div className="city-card"
        onClick={()=> hourly ? null:handleClick(day)}
        >
          {!hourly &&  <p>
                {day}
            </p>}
            <img 
            alt='city'
            src={`http://openweathermap.org/img/wn/${cityData.weather[0].icon}.png`} />
         {hourly ?  (
             <>
             <p>{cityData.temp}°</p>
             <p>{date.getHours()}:{date.getMinutes()}:{date.getSeconds()}</p>
             </>
         ):   <div >
                 <strong>{cityData.temp.max} °</strong>   
                 <p>{cityData.temp.min} °</p> {` `}  
            </div>}
        </div>
    )
}

export default CityCard
