import './navbar.css'
import React from 'react'

const Navi = () => {
    return(
        <header className='main'>
        <div className="container">
          <h1 className="logo"></h1>
    
          <nav>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Team</a></li>
              <li><a href="#">Events</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </nav>
        </div>
      </header>
    )
}

export default Navi