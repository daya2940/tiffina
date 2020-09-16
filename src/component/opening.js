import React, { Component } from 'react';
import Bg from '../assets/Bg.png';
import Bg2 from '../assets/Bg 2.1.png';
import Bg3 from '../assets/object 1.png';

class Opening extends Component {
  render() {
    return (
      <div>
        <div style={{ background: `url(${Bg})`, height: '100vh', width: '100vw' }}>
          <div style={{ position: 'relative' }}>
            <img src={Bg2} alt="" style={{ position: 'absolute', top: '0px', left: '0px', width: '100%', height: '300px' }} />
            <img src={Bg3} alt="" style={{ position: 'absolute', top: '51px', left: '117px', zIndex: '3', height: '100px', width: '78px' }} />
            <div style={{ position: 'absolute', top: '185px', left: '20px', zIndex: '5', height: '80px', width: '200px' }}>
              <span className="font-weight-bold pb-0">HURRY!!</span><br />
              <span>HUNGER DON'T WAIT</span>
            </div>
          </div>
          <div style={{position:"relative"}}>
            <button className="getStartedButton" >GET STARTED</button>
            <button className="withoutLoginButton">Continue Without Login</button>
            <button className="customer">Already a Tiffina Member<span className="ml-2">Login</span></button>
          </div>
        </div>
      </div>
    )
  }
}

export default Opening