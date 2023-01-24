import React from 'react';
import'../components/LandingPage.css'
import backgroundfinal from '../assets/backgroundfinal.svg';
import astroplusrocket from '../assets/astroplusrocket.svg';
import logo from '../assets/logo.svg'
import img279 from '../assets/ellipse.svg'
import LoginCard from '../components/LoginCard'


function LandingPage() {
  return (
    <div className="App">
    <img src={backgroundfinal} className="background" alt="Your SVG" />
    <img src={astroplusrocket} alt="astroman" className='astro'/>
    <img src={logo} className="logo" alt='logo'/>
    <img scr={img279} className='ellipse' alt='ellipse'></img>
    <LoginCard/>
  </div>
  )
}

export default LandingPage