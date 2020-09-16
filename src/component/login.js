import React, { Component } from 'react';
import Bg from '../assets/Bg.png';
import Bg2 from '../assets/Bg 2.2.png';
import Bg3 from '../assets/object 2.png';
import mobile from '../assets/icon _mobile.png';
import email from '../assets/icon _mail.png';
import google from '../assets/icon _google.png';
import fb from '../assets/icon _fb.png';

class Login extends Component {
  render() {
    return (
      <div>
        <div style={{ background: `url(${Bg})`, height: '100vh', width: '100vw' }}>
          <div style={{ position: 'relative' }}>
            <img src={Bg2} alt="" style={{ position: 'absolute', top: '0px', left: '0px', width: '100%', height: '200px' }} />
            <img src={Bg3} alt="" style={{ position: 'absolute', top: '51px', left: '117px', zIndex: '3', height: '100px', width: '78px' }} />
          </div>
          <div style={{position:"relative"}}>
            <p className="login">LOGIN</p>
            <button className="mobile" >
              <img src={mobile} alt="" className="icon mr-2" />Enter Your Mobile No</button>
            <button className="fb"> <img src={fb} alt="" className="icon mr-1 pl-2" />Continue with Facebook</button>
            <button className="google"> <img src={google} alt="" className="icon mr-3" />Continue with Google</button>
            <button className="email"> <img src={email} alt="" className="icon mr-3" />Continue with Email</button>
            <div className="terms">
              <span>By continuing,You Agree To Our</span><br/>
              <a href="/">Terms of Service And Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login