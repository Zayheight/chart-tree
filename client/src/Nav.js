import React from 'react'
import './App.css'
import {Link} from 'react-router-dom'

function Nav(){
    return(
        <nav>
            <ul className="nav-links">
                <Link to="/100GB"><li></li>100GB</Link>
                <Link to="/Chart"><li></li>Garph</Link>
            </ul>
        </nav>
        
    )
}
export default Nav;