import React from 'react'

function Card(props) {
    console.log(props.item.img)
    return (
        <div className="card">
            <img src={`/public/assets/${props.item.img}`} className='card-photo'/>
            
        </div>
    )
}

export default Card