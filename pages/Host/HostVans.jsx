import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import { getHostVans } from '../../api'

export function loader(){
    return getHostVans()
}

export default function Vans(){
    const vans = useLoaderData()

    const vanElements = vans.map((van) => {
        return (
            <Link key={van.id} to={`${van.id}`}>
                <div className='host-van-card'>
                    <img className='host-van-image' src={van.imageUrl} />
                    <div className='host-van-card-description'>
                        <h3>{van.name}</h3>
                        <p>${van.price}/day</p>
                    </div>
                </div>
            </Link>
        )
    })

    return (
        <div className='page-container'>
            <h1>Your listed vans</h1>
            <div className='host-vans'>
                {vanElements}
            </div>
        </div>
    )
}