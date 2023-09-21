import React from 'react'
import { useOutletContext } from 'react-router-dom'

export default function HostVanPricing(){
    const { currentVan } = useOutletContext()
    console.log(currentVan)
    return(
        <p><span className='large-price'>$60</span>/day</p>
    )
}