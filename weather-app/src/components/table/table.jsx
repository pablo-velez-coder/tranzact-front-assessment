import React from 'react'
import { useHistory } from 'react-router-dom';
import './table.scss'

const CitiesTable = ({cities}) => {
  const history =  useHistory()
    const HandleClick = (item) =>{
        history.push({
          pathname:`/${item.id}`,
          state:{
            lat: item.coord.lat,
            lon: item.coord.lon
          }
        })
    }

    return (
        <table className="cities__table" width="100%">
        <thead className="cities__header">
          <tr>
            <th>#</th>
            <th>Name</th>
            <th >
              State
            </th>
            <th>
              Country
            </th>
            <th >
              Coords
            </th>
          </tr>
        </thead>
        <tbody>
          { cities.map((item, i) => (
            <tr className="cities__row"
            onClick={()=> HandleClick(item)}
            key={item.id}>
              <td className="cities__row__indicator">
                {i + 1}
              </td>
              <td
                className="cities__row__name"
              >
                {item.name}
              </td>
              <td >
                {item.state}
              </td>
              <td >
                {item.country}
              </td>
              <td  >
                lon:{item.coord.lon}, 
                lan:{item.coord.lat}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    )
}

export default CitiesTable
