import React from 'react'
import { Link} from 'react-router-dom'

/* import{useHistory }from 'react-router-dom' */

import './NavBar.scss'


const NavBar = () => {
    
/*     const history = useHistory()
 */

    return (
        <nav className="navbar navbar-expand-sm navbar-dark sticky-top">
          <div className="navbar__top">
          <Link
            className="navbar-brand"
            to='/'
            >
            <h1
            className="navbar__brandTitle"
            >Weather <strong>World</strong>   </h1>
            </Link>
            
          </div>

        </nav>
    )
}

export default NavBar
