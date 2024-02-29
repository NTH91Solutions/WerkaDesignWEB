import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/JacketART.png'

function Hero() {
  return (
    <div className='hero'>
        <div className="hero-left">
                    <h1>Welcome</h1>
                    <h2>i am Weronika and welcome to my website. </h2>
                    <p>Life is about follow your dreams and passions <br /> And this is my dream i am a artist what love ti create from second hand the most betifull items</p>
            <div className="hero-latest-btn">
              <div>Latest Collection</div>
              <img src={arrow_icon} alt="" />  
            </div>
        </div>
        <div className="hero-right">
          <img src={hero_image} alt="" />
        </div>
    </div>
  )
}

export default Hero