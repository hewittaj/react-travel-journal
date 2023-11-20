import React from 'react'
import mapPin from '../../public/assets/map-pin.svg'

function Card(props) {
    console.log(props.item.img)
    return (
        <div className="card">
            <img src={`/public/assets/${props.item.img}`} className='card-photo'/>
            <div className='card-details'>
                <div className="card-location-info">
                    <img src={mapPin}/>
                    <p>{props.item.country}</p>
                    <a href={props.item.googleMapsLink}>View on Google Maps</a>
                </div>
                <div className='card-location-details'>

                </div>
            </div>
        </div>
    )
}

export default Card