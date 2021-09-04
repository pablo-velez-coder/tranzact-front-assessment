import React from 'react'
import { Route, Switch} from 'react-router-dom';
import CityDetails from '../components/cities/cityDetails';
import Cities from '../components/cities/cities';
import NavBar from '../components/ui/NavBar';

const CitiesRoutes = () => {
    return (
        <>
          <NavBar />
        <Switch>
          <Route exact path='/' component={Cities} />
          <Route path='/:cityId' component={CityDetails} />
       </Switch>
        </>
    )
}

export default CitiesRoutes
