import React from 'react'
import './filterInput.scss'
import SearchIcon from '@material-ui/icons/Search'

const FilterInput = ({value, handleChange,name}) => {
    return (
        <div className="filter-input">
        <SearchIcon />
            <input 
            value={value}
            onChange={handleChange}
            type="text" placeholder={`Find by ${name}`}/>
        </div>
    )
}

export default FilterInput
