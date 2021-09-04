import axios from 'axios'
import {BASE_URL, API_KEY} from './constants'

export const getForecastById = async (cityId) =>{
    try {
        const response = await axios.get(`${BASE_URL}/forecast?id=${cityId}&appid=${API_KEY}`) 
        const {data, status} = response
        if(status=== 200){
            return data
        }
        if(status === 400){
            return 'Error, try with another city'
        }
    } catch (error) {
        return error
    }

}

export const getCityByName = async (cityName) =>{
    try {
        const response = await axios.get(`${BASE_URL}/find?q=${cityName}&appid=${API_KEY}`) 
        const {data, status} = response
        if(status=== 200){
            return data
        }
        if(status === 400){
            return 'Error, try with another city'
        }
    } catch (error) {
        return error
    }
}

export const getOneCall = async (lat, lon) =>{
    try {
        const response = await axios.get(`${BASE_URL}/onecall?lat=${lat}&lon=${lon}&appid=${API_KEY}`) 
        const {data, status} = response
        if(status=== 200){
            return data
        }
        if(status === 400){
            return 'Error, try with another city'
        }
    } catch (error) {
        return error
    }
}