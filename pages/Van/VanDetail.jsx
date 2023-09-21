import React from 'react'
import { Link, useParams } from 'react-router-dom'


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
                <section className='page-container'>
                    <div className='van-detail-container'>
                        <Link className='back-btn' to='..' relative='path'>
                            Back to all vans
                        </Link>
                        <img className='van-image' src={van.imageUrl} />
                        <div className='van-description-container'>
                            <span className={`van-type ${van.type}`}>{van.type}</span>
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