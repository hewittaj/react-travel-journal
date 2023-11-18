import React from 'react'

function Card(props) {
    return (
        <div className="card">
            <h1>{props.id}</h1>
        </div>
    )
}

export default Card