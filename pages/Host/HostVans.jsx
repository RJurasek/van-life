import React from 'react'
import { Link } from 'react-router-dom'

export default function Vans(){
    const [vans, setVans] = React.useState([])

    React.useEffect(() => {
        fetch('/api/host/vans')
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])

    const vanElements = vans.map((van) => {
        return (
            <Link key={van.id} to={`/host/vans/${van.id}`}>
                <div className='host-van-card'>
                    <img src={van.imageUrl} />
                    <div className='van-card-description'>
                        <h3 className='host-van-name'>{van.name}</h3>
                        <p className='van-price'>${van.price}/day</p>
                    </div>
                </div>
            </Link>
        )
    })

    return (
        <div className='host-vans-page'>
            <h1>Your listed vans</h1>
            <div className='host-vans'>
                {vanElements}
            </div>
        </div>
    )
}