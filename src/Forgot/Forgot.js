import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import './forgot.css'

const Forgot = () => {
  return (
    <div className="back">
        <Navbar/>
        <div className="back2">
            <div className="whitebox">
                <p className='help'>Need help with your <br/> account?</p>
                <span>Enter the email address associated with your account and we will send you a link to reset your password.</span>
                <input type="email" placeholder='Enter your email' className='user'/>
                <a href="/" className="veriacc">Send Link</a>
                <p className='formail'>Forgot your email?</p>
 
            </div>

        </div>

        <Footer/>
    </div>
  )
}

export default Forgot