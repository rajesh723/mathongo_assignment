import OTPInput, { ResendOTP } from "otp-input-react";
import {useState} from 'react'

import React from 'react'

const Otp = () => {
    const [OTP, setOTP] = useState("");
  return (
    <>
    <OTPInput value={OTP} onChange={setOTP} autoFocus OTPLength={5} otpType="number" disabled={false} />
    </>
  )
}

export default Otp