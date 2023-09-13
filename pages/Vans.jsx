import React from 'react'
import {Link} from 'react-router-dom'

export default function Vans(){
    const [vans, setVans] = React.useState([])
    React.useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])

   const vanElements = vans.map((van) => {
        return (
            <div className='van' key={van.id}>
                <img src={van.imageUrl} />
                <div>
                    <h3>{van.name}</h3>
                    <p><span className='price'>${van.price}</span><br/>/day</p>
                </div>
                <p className={`${van.type} van-type`}>{van.type}</p>
            </div>
        )
   })

    return (
        <div>
            <h1>Explore our van options</h1>
            <div>
                <button>Simple</button>
                <button>Luxury</button>
                <button>Rugged</button>
                <button>Clear filters</button>
            </div>
            <div className='van-list'>
                {vanElements}
            </div>
        </div>
    )
}