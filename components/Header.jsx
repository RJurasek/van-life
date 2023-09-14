import React from 'react'
import {Link, NavLink} from 'react-router-dom'

export default function Header(){

    return (
        <header>
            <Link className="site-logo" to="/">#VanLife</Link>
            <nav>
                <NavLink className={obj => obj.isActive ? "active" : ""} to="/about">About</NavLink>
                <NavLink className={obj => obj.isActive ? "active" : ""} to="/vans">Vans</NavLink>
            </nav>
      </header>
    )
}