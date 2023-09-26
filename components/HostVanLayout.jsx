import React from 'react'
import { Link, NavLink, Outlet, useLoaderData } from 'react-router-dom'
import { getHostVans } from '../api'

export function loader({ params }){
    return getHostVans(params.id)
}

export default function HostVanLayout(){
    const data = useLoaderData()
    const currentVan = data[0]


    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616",
        textUnderlineOffset: ".2em",
    }

    return (
        <>
        {currentVan ? (
            <section className='page-container'>
                <Link className='back-btn' to="../vans">
                    Back to all vans
                </Link>
                <div className='host-van-detail-container'>
                    <div className='host-van-detail-top'>
                        <img className='host-van-details-image' src={currentVan.imageUrl} />
                        <div className='host-van-description'>
                            <span className={`${currentVan.type} van-type`}>{currentVan.type.charAt(0).toUpperCase() + currentVan.type.slice(1)}</span>
                            <h2>{currentVan.name}</h2>
                            <p><span className='price'>${currentVan.price}</span>/day</p>
                        </div>
                    </div>
                    <nav className='host-navbar'>
                        <NavLink end style={({isActive}) => isActive ? activeStyles : null} to=".">Details</NavLink>
                        <NavLink style={({isActive}) => isActive ? activeStyles : null} to="pricing">Pricing</NavLink>
                        <NavLink style={({isActive}) => isActive ? activeStyles : null} to="photos">Photos</NavLink>
                    </nav>
                    <Outlet context={{currentVan}}/>
                </div>
            </section>
        ) 
        : (
            <div className='loading-wrapper'>
                <h2 className='loading-text'>Loading...</h2>
            </div>
        )}
        </>
        
    )
}