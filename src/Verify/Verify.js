import React from "react";
import Navbar from "../Navbar/Navbar.js";
import Footer from "../Footer/Footer.js";
import Otp from "./Otp.js";
import "./verify.css";
import ReactDOM from "react-dom";
import Countdown from "react-countdown";

const Verify = () => {
  return (
    <div className="back">
      <Navbar />
      <div className="back2">
        <div className="whitebox">
          <p className="veri">Verify your email</p>
          <span className="mailc">We have sent code to your email <span className="mail">alesiaka******@mail.com</span></span>
          <Otp />
          <a href="/welcome" className="veriacc">Verify Account</a>
          <p className="resend">
            Resend code in
            <div className="ti">
              <Countdown date={Date.now() + 3600000} />
            </div>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Verify;
