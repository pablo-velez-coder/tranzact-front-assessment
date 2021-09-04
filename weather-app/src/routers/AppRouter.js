import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import CitiesRoutes from './CitiesRoutes';

const AppRouter = () => {
  
    return (
        <Router>
            <div>
                <Switch>
                     <Route  path='/' component={CitiesRoutes} />
                </Switch>
            </div>
            
        </Router>
    )
}

export default AppRouter
