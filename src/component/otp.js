import React, { Component } from 'react';
import Bg from '../assets/Bg.png';
import Bg2 from '../assets/Bg 2.3.png';
import Bg3 from '../assets/object 3.png';

class Otp extends Component {
  render() {
    return (
      <div>
        <div style={{ background: `url(${Bg})`, height: '100vh', width: '100vw' }}>
          <div style={{ position: 'relative' }}>
            <img src={Bg2} alt="" style={{ position: 'absolute', top: '0px', left: '0px', width: '100%', height: '283px' }} />
            <img src={Bg3} alt="" style={{ position: 'absolute', top: '51px', left: '117px', zIndex: '3', height: '100px', width: '107px' }} />
          </div>
          <div style={{ position: "relative" }}>
            <p className="login-otp">Login</p>
            <p className="mobtext">Enter your mobile number</p>
            <input type="number" placeholder="+91|" />
            <p className="verify">VERIFY OTP</p>
            <p className="verify-text">Otp has been sent to number</p>
            <input type="number" className="verify-input"/>
            <p className="resend-otp">change Mobile no<span>RESEND</span></p>
            <button className="pro-button">PROCEED</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Otp