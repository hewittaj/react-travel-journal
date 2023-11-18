import React from 'react'
import globe from '../assets/globe-2.svg'

function Nav() {
    return (
        <nav className="nav">
            <img src={globe} className='nav-img'/>
        </nav>
    )
}

export default Nav