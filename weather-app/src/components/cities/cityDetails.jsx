import React,{useState, useEffect, useRef} from 'react'
import {  useHistory } from 'react-router-dom';
import { getOneCall } from '../../api/service';
import { getDay } from '../../utils/string';
import CityCard from '../cityCard/cityCard';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import './cityDetails.scss'

const CityDetails = () => {
   const history = useHistory()
   const listRef = useRef();
   const lat = history.location.state.lat
   const lon = history.location.state.lon
   const [cityDetails, setCityDetails] = useState({});
   const [chosenDay, setChosenDay] = useState('')
   const [hourlyData, setHourlyData] = useState([])

   useEffect(() => {
    const consultarAPI = async () => {
        if(lat && lon) {
          const resultado = await getOneCall(lat, lon)
            setCityDetails(resultado);
        }
    }
    consultarAPI();
  },[lat,lon]);

  const handleClick = (day) =>{
    setChosenDay(day)
    listRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  useEffect(() => {
     setHourlyData(cityDetails?.hourly?.filter(item=>{
        const date = new Date(item.dt * 1000);
        const day = date.toDateString().split(' ')[0]
        return day === chosenDay
     }))
  }, [chosenDay, cityDetails])

    return (
        <div className="cityDetails">
            <div
            className="cityDetails__back"
            onClick={()=> history.goBack()}>
                <ArrowBackIcon />
            </div>
            <div
            ref={listRef}
            className="cityDetails__list">
            {cityDetails?.daily?.slice(0,7).map((item,id) => (
                <CityCard
                handleClick={handleClick}
                key={id}
                cityData={item}
                />
            ))}
            </div>
            <div>
                <h2>{chosenDay ? getDay(chosenDay):''}</h2>
                {chosenDay && !hourlyData.length && <p>No results for this day</p>}
                {hourlyData && (
                    <div>
                        {hourlyData.map(item =>(
                            <CityCard
                                key={item.dt}
                                cityData={item}
                                hourly
                            />
                        )
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}

export default CityDetails
