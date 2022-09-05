import React from 'react'
import  Navbar  from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import './welcome.css'

const Welcome = () => {
  return (
    <div className="back">
        <Navbar/>
        <div className="back2">
            <div className='smallbox'>
                <p>Hi, Johne Doe!</p>
                <span>You’re logged in. Well done!</span>
                <a href="/">Log out</a>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Welcome