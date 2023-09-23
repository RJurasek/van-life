import React from 'react'
import { useParams, Link, NavLink, Outlet } from 'react-router-dom'

export default function HostVanLayout(){

    const params = useParams()

    const [currentVan, setCurrentVan] = React.useState()

    React.useEffect(() =>{
        fetch(`/api/host/vans/${params.id}`)
            .then(res => res.json())
            .then(data => setCurrentVan(data.vans[0]))
    }, [])

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
                <Link className='back-btn' to=".." relative='path'>
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