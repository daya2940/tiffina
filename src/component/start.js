import React, { Component } from 'react'
import Bg from '../assets/Bg.png';
import icon from '../assets/Tiffinia_icon_small.png';

class Start extends Component {
  render() {
    return (
      <div>
        <div style={{ background: `url(${Bg})`, width: '100vw', height: '100vh' }}>
          <div className="d-flex justify-content-center">
          <img src={icon} alt="tiffinia icon" className="tiffinia-icon" />

          </div>
        </div>
      </div>
    )
  }
}

export default Start
