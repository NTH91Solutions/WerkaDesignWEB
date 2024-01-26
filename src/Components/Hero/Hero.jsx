import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'

function Hero() {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>New Arrivals</h2>
            <div>
                <div className="hand-hand-icon">
                    <p>New</p>
                    <img src={hand_icon} alt="" />
                </div>
                <p>Collections</p>
                <p>for everyone</p>
            </div>
            <div className="hero_latest_button">
                
            </div>
        </div>
    </div>
  )
}

export default Hero