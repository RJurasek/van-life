import React from 'react'
import { useParams } from "react-router-dom"
import { Link } from 'react-router-dom'


export default function VanDetail(){
    const params = useParams()

    const [van, setVan] = React.useState(null)

    React.useEffect(() => {
        fetch(`/api/vans/${params.id}`)
            .then(res => res.json())
            .then(data => setVan(data.vans))
    },[])
    
    return (
        <>
            {van ? (
                <div className='van-detail-page'>
                    <div className='van-detail-container'>
                        <Link to='/vans'>
                            <p>Back to all vans</p>
                        </Link>
                        <img src={van.imageUrl} />
                        <div className='van-detail-description-container'>
                            <span className={`van-type ${van.type}`}>{van.type}</span>
                            <h1>{van.name}</h1>
                            <p><span className='price'>${van.price}</span>/day</p>
                            <p>{van.description}</p>
                            <button className='cta-btn'>Rent this van</button>
                        </div>
                    </div>
                </div>)
            : <h2>Loading...</h2>
            }
        </>
    )
}