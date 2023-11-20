import React from 'react'
import mapPin from '../../public/map-pin.svg'

function Card(props) {
    console.log(props.item.img)
    return (
        <div className="card">
            <img src={`/public/${props.item.img}`} className='card-photo'/>
            <div className='card-details'>
                <div className="card-location-info">
                    <img src={mapPin}/>
                    <p className='card-country'>{props.item.country}</p>
                    <a href={props.item.googleMapsLink} className='links-grey'>View on Google Maps</a>
                </div>
                <div className='card-location-details'>
                    <h2 className='card-city'>{props.item.city}</h2>
                    <p className='card-dates-visited'>{props.item.datesVisited}</p>
                    <p className='card-city-details'>{props.item.details}</p>
                </div>
            </div>
        </div>
    )
}

export default Card