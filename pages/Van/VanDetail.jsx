import React from 'react'
import { Link, useLocation, useLoaderData } from 'react-router-dom'
import { getVans } from '../../api'

export function loader({ params }){
    return getVans(params.id)
}

export default function VanDetail(){
    const location = useLocation()

    const van = useLoaderData()
    console.log(van)

    const search = location.state.search ? `?${location.state.search}` : ""
    const type = location.state.type.length > 0 ? location.state.type : "all"
    
    return (
        <>
            {van ? (
                <section className='page-container'>
                    <div className='van-detail-container'>
                        <Link className='back-btn' to={`..${search}`} relative='path'>
                            Back to {type} vans
                        </Link>
                        <img className='van-image' src={van.imageUrl} />
                        <div className='van-description-container'>
                            <span className={`van-type ${van.type}`}>{van.type.charAt(0).toUpperCase() + van.type.slice(1)}</span>
                            <h1>{van.name}</h1>
                            <p><span className='price'>${van.price}</span>/day</p>
                            <p>{van.description}</p>
                            <button className='cta-btn orange-btn'>Rent this van</button>
                        </div>
                    </div>
                </section>)
            : (
                <div className='loading-wrapper'>
                    <h2 className='loading-text'>Loading...</h2>
                </div>
            )
            }
        </>
    )
}