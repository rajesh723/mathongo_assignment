import React from 'react'
import Slides from '../IndividualIntervalsExample.js'
import glogo from '../Signin/googlelogo.svg'
import Divide from "../Signin/Divide.js"
import ShowAndHidePassword from '../Signin/ShowAndHidePassword'
import './signup.css'

const Signup = () => {
  return (
    <div className='signup'>
    <div className='slider'>
        <Slides/>
    </div>
    <div className='right'>
                <h1>Sign up for an account</h1>
                <p className='sub'>Send, spend and save smarter</p>
                <a href="/" className='gbutton'><img src={glogo} alt="" /> Sign In with Google</a>
                <Divide />
                <div className='flname'>
                    <input type="text" placeholder='First name' style={{marginRight:'15px'}}/>
                    <input type="text" placeholder='Last name' />
                </div>
                <input type="text" placeholder='Username or email' className='upass' style={{marginTop:'10px'}}/>
                <ShowAndHidePassword />
                <p className='tc'>By creating an account, you agreeing to our <span className='bolder'>Privacy Policy</span>, and <span className='bolder'>Electronics Communication Policy.</span></p>
                <a href="/verify" className='signinbutton' style={{marginTop:'10px'}}>Sign up</a>
                <p className='recovery'>Don’t have an account? <a href="/"> Sign In</a></p>
                <div className='copyright' style={{marginTop:'25px'}}>
                    <p>Privacy Policy</p>
                    <p>Copyright 2022</p>
                </div>



    </div>
    </div>
  )
}

export default Signup