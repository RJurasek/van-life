import React from 'react'
import {Link, useSearchParams} from 'react-router-dom'

export default function Vans(){
    const [vans, setVans] = React.useState([])
    const [searchParams, setSearchParams] = useSearchParams()
    const typeFilter = searchParams.getAll("type")
    console.log(typeFilter)

    function handleFilterChange(key, value){
        setSearchParams(prevParams => {
            if(value === null){
                prevParams.delete(key)
            } else {
                prevParams.append(key, value)
            }
            return prevParams
        })
    }

    React.useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])

    const displayedVans = typeFilter.length > 0 ? vans.filter(van => typeFilter.includes(van.type) ? van : null ) : vans

   const vanElements = displayedVans
        .map((van) => (
            <div className='van-tile' key={van.id}>
                <Link to={`/vans/${van.id}`}>
                    <img className='van-image' src={van.imageUrl} />
                    <div className='van-tile-description'>
                        <h3>{van.name}</h3>
                        <p><span className='price'>${van.price}</span><br/>/day</p>
                    </div>
                    <span className={`${van.type} van-type`}>{van.type.charAt(0).toUpperCase() + van.type.slice(1)}</span>
                </Link>
            </div>
            
        )
    )

    return (
        <section className='page-container'>
            <h1>Explore our van options</h1>
            <div className='filter-btn-container'>
                <button onClick={() => handleFilterChange("type", "simple")} className='filter-btn'>Simple</button>
                <button onClick={() => handleFilterChange("type", "luxury")} className='filter-btn'>Luxury</button>
                <button onClick={() => handleFilterChange("type", "rugged")} className='filter-btn'>Rugged</button>
                <button onClick={() => handleFilterChange("type", null)} className='clear-filter-btn'>Clear filters</button>
            </div>
            {vans.length > 1 ? (
                <div className='van-list'>
                    {vanElements}
                </div>
            )
            : (
                <div className='loading-wrapper'>
                    <h2 className='loading-text'>Loading...</h2>
                </div>
            )}
        </section>
    )
}