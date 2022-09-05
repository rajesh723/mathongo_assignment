import React from 'react'
import logo from '../logo.svg'
import glogo from './googlelogo.svg'
import ShowAndHidePassword from './ShowAndHidePassword'
import Slides from '../IndividualIntervalsExample.js'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './sigin.css'
import Divide from "./Divide.js"

const Signin = () => {
  return (
    <div className='singinpage'>
        <div className='left'>
            <div className='logoclass'>
                <img src={logo} alt="" />
            </div>
            <div className='signform'>
                <h1>Sign in to Overpay</h1>
                <p className='sub'>Send, spend and save smarter</p>
                <a href="/" className='gbutton'><img src={glogo} alt="" /> Sign In with Google</a>
                <Divide />
                <input type="text" placeholder='Username or email' className='upass'/>
                <ShowAndHidePassword />
                <div className='remember'>
                    <div className='rem'><input type="checkbox" /><p>Remember me</p></div>
                    <a href='/forgot'>Forgot Password?</a>
                </div>
                <a href="/welcome" className='signinbutton'>Sign In</a>
                <p className='recovery'>Don’t have an account? <a href="/signup"> Sign Up</a></p>
                <div className='copyright'>
                    <p>Privacy Policy</p>
                    <p>Copyright 2022</p>
                </div>
            </div>
        </div>
        <div className='slider'>
            <Slides/>
        </div>
    </div>
  )
}

export default Signin