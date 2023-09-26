import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import avatarImg from "../assets/images/avatar-icon.png"

export default function Header(){

    const [hamburgerOpen, setHamburgerOpen] = React.useState(false)

    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616",
        textUnderlineOffset: ".2em",
    }

    return (
        <header>
            <Link className="logo" to="/">#VanLife</Link>
            <nav>
                <NavLink style={({isActive}) => isActive ? activeStyles : null} to="/about">About</NavLink>
                <NavLink style={({isActive}) => isActive ? activeStyles : null} to="/vans">Vans</NavLink>
                <NavLink style={({isActive}) => isActive ? activeStyles : null} to="/host">Host</NavLink>
                <NavLink to="login" className="login-link">
                    <img
                        src={avatarImg}
                        className='login-icon'
                    />
                </NavLink>
            </nav>
        </header>
    )
}