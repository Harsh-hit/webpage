import './navbar.css'
import React from 'react'

const Navi = () => {
    return(
        <header className='main'>
        <div className="container">
          <h1 className="logo"></h1>
          <nav>
            <ul>
              <li><a>Home</a></li>
              <li><a>Team</a></li>
              <li><a>Events</a></li>
              <li><a>Contact Us</a></li>
            </ul>
          </nav>
        </div>
      </header>
    )
}

export default Navi