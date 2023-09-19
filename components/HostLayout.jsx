import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'

export default function HostLayout(){
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616",
        textUnderlineOffset: ".2em",
    }

    return (
        <div className='host-layout-page'>
            <nav className='host-navbar'>
                <NavLink end style={({isActive}) => isActive ? activeStyles : null} to="/host">Dashboard</NavLink>
                <NavLink style={({isActive}) => isActive ? activeStyles : null}  to="/host/income">Income</NavLink> 
                <NavLink style={({isActive}) => isActive ? activeStyles : null}  to="/host/reviews">reviews</NavLink>  
            </nav>
            <Outlet/>
        </div>
    )
}