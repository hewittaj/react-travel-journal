import React from 'react'
import globe from '/public/assets/img/globe-2.svg'

function Nav() {
    return (
        <nav className="nav">
            <img src={globe} className='nav-img'/>
            <h1>my travel journal.</h1>
        </nav>
    )
}

export default Nav