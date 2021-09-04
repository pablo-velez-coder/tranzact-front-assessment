import React,{useState, useMemo} from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import { CircularProgress } from '@material-ui/core';
import {cities as citieslist} from '../../data/city-list'
import CitiesTable from '../table/table';
import FilterInput from '../common/filterInput/filterInput';
import './cities.scss'

const Cities = () => {
    
    const [data] = useState(citieslist)
    const [countryText, setCountryText] = useState('');
    const [stateText, setStateText] = useState('');
    const [nameText, setNameText] = useState('');

    const filteredData = useMemo(()=>{
        return data.filter(item => {
            return item.name.toLowerCase().includes(nameText.toLowerCase()) 
             && item.country.toLowerCase().includes(countryText.toLowerCase())
             && item.state.toLowerCase().includes(stateText.toLowerCase())
        })
    },[data,nameText, countryText, stateText])

  return (
        <div className="cities animate__animated animate__fadeIn">
            <div className="cities__filters">                         
                <FilterInput 
                name="country"
                value={countryText}
                handleChange={e => setCountryText(e.target.value)}
                />
                <FilterInput 
                name="state"
                value={stateText}
                handleChange={e => setStateText(e.target.value)}
                />
                <FilterInput 
                name="name"
                value={nameText}
                handleChange={e => setNameText(e.target.value)}
                />
            </div>
       
        <div className="cities__list">
        <h2>Cities</h2> 
            <InfiniteScroll
                className="cities-list"
                dataLength={filteredData?.length}
                next={[]}
                hasMore={false}
                loader={<div style={{ width:'100vw', display:'flex', justifyContent:'center'}}><CircularProgress /></div>}
                >          
               <CitiesTable cities={filteredData} />
            </InfiniteScroll> 
        </div>
        </div>
    )
}

export default Cities
