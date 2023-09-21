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
                <NavLink end style={({isActive}) => isActive ? activeStyles : null} to=".">Dashboard</NavLink>
                <NavLink style={({isActive}) => isActive ? activeStyles : null}  to="income">Income</NavLink> 
                <NavLink style={({isActive}) => isActive ? activeStyles : null}  to="vans">Vans</NavLink>  
                <NavLink style={({isActive}) => isActive ? activeStyles : null}  to="reviews">reviews</NavLink>
            </nav>
            <Outlet/>
        </div>
    )
}