import React from 'react'
import {Link, useSearchParams} from 'react-router-dom'

export default function Vans(){
    const [vans, setVans] = React.useState([])
    const [clicked, setClicked] = React.useState("")
    const [searchParams, setSearchParams] = useSearchParams()

    const typeFilter = searchParams.getAll("type")

    function handleFilterChange(key, value){
        if(value === null){
            setClicked("")
        }
        setSearchParams(prevParams => {
            if(value === null){
                prevParams.delete(key)
            } else {
                if(prevParams.getAll(key).includes(value)){
                    prevParams.delete(key)
                } else {
                prevParams.set(key, value)
                }
            }
            return prevParams
        })
    }
    
    function toggleClicked(value){
        setClicked(prevState => {
            if(prevState === value){
                return ""
            } else {
                return value
            }
        })
    }
    console.log(clicked)
    React.useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])

    const displayedVans = typeFilter.length > 0 ? vans.filter(van => typeFilter.includes(van.type) ? van : null ) : vans

   const vanElements = displayedVans
        .map((van) => (
            <div className='van-tile' key={van.id}>
                <Link to={`${van.id}`}>
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
                <button 
                    onClick={() => handleFilterChange("type", "simple")}
                    style={ typeFilter.includes("simple") ? {background: "#E17654", color: "#FFEAD0"} : null} 
                    className='filter-btn'>
                        Simple
                </button>
                <button 
                    onClick={() => handleFilterChange("type", "luxury")}
                    style={ typeFilter.includes("luxury") ? {background: "#161616", color: "#FFEAD0"} : null} 
                    className='filter-btn'>
                        Luxury
                </button>
                <button 
                    onClick={() => handleFilterChange("type", "rugged")}
                    style={ typeFilter.includes("rugged") ? {background: "#115E59", color: "#FFEAD0"} : null} 
                    className='filter-btn'>
                        Rugged
                </button>

                {typeFilter.length > 0 && <button 
                    onClick={() => handleFilterChange("type", null)} 
                    className='clear-filter-btn'>
                        Clear filters
                </button>}
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