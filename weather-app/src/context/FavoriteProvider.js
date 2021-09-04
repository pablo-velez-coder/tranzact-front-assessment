import React, {createContext, useReducer,useEffect} from 'react'
import reducer from './reducer'


const initialState = {
    favorites: localStorage.getItem('favorites')
    ? JSON.parse(localStorage.getItem('favorites'))
    : []
}
export const FavoriteContext = createContext(initialState)

export const FavoriteProvider = (props) => {

    const [{favorites},dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites))
       
    }, [favorites])

    return(
        <FavoriteContext.Provider value={{
            favorites, dispatch
        }}>
        {props.children}
    </FavoriteContext.Provider>
    )
}

