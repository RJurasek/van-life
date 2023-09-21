import React from 'react'
import { useOutletContext } from 'react-router-dom'

export default function HostVanPhotos(){
    const { currentVan } = useOutletContext()
    console.log(currentVan)
    return (
        <img className='host-van-details-image' src={currentVan.imageUrl}/>
    )
}