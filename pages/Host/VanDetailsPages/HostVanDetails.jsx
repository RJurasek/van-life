import React from 'react'
import { useOutletContext } from 'react-router-dom'

export default function HostVanDetails(){
    const { currentVan } = useOutletContext()
    
    return (
        <div className='host-van-details'>
            <p><span className='bold'>Name: </span>{currentVan.name}</p>
            <p><span className='bold'>Type: </span>{currentVan.type}</p>
            <p><span className='bold'>Description: </span>{currentVan.description}</p>
            <p><span className='bold'>Visibility: </span>{currentVan.visibility}</p>
        </div>
    )
}