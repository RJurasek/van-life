import React from 'react'
import { useParams, Link, NavLink, Outlet } from 'react-router-dom'

export default function HostVanDetail(){
    const params = useParams()

    const [van, setVan] = React.useState()

    React.useEffect(() =>{
        fetch(`/api/host/vans/${params.id}`)
            .then(res => res.json())
            .then(data => setVan(data.vans[0]))
    }, [])

    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616",
        textUnderlineOffset: ".2em",
    }

    return (
        <>
        {van ? (
            <div className='host-van-details-page'>
                <Link className='back-to-vans-link' to="../vans">
                    Back to all vans
                </Link>
                <div className='host-van-detail-card'>
                    <div className='host-van-card-top'>
                        <img src={van.imageUrl} />
                        <div>
                            <span className={`${van.type} van-type`}>{van.type}</span>
                            <h2>{van.name}</h2>
                            <p><span className='price'>${van.price}</span>/day</p>
                        </div>
                    </div>
                    <nav className='host-van-navbar'>
                        <NavLink end style={({isActive}) => isActive ? activeStyles : null} to=".">Details</NavLink>
                        <NavLink style={({isActive}) => isActive ? activeStyles : null} to="pricing">Pricing</NavLink>
                        <NavLink style={({isActive}) => isActive ? activeStyles : null} to="photos">Photos</NavLink>
                    </nav>
                    <Outlet/>
                </div>
            </div>
        ) 
        : (
            <div className='loading-wrapper'>
                <h2 className='loading-text'>Loading...</h2>
            </div>
        )}
        </>
        
    )
}