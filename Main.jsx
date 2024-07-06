import React from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
const Main = () => {
  return (
    <div className='main'>
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        <div className="greet">
            <p><span>Hello,dev</span></p>
            <p>How can I help you today</p>
        </div>
        <div className="cards">
            <div className="card">
                <p>Suggect a Beautiful city for a road trip</p>
                <img src={assets.compass_icon} alt="" />
            </div>
            <div className="card">
                <p>Breaf on an urban city architecture</p>
                <img src={assets.bulb_icon} alt="" />
            </div>
            <div className="card">
                <p>Tasks to inprove team building skills</p>
                <img src={assets.message_icon} alt="" />
            </div>
            <div className="card">
                <p>Simplify the code to make it more readable</p>
                <img src={assets.code_icon} alt="" />
            </div>
        </div>
        <div className="main-bottom">
          <div className="search-box">
            <input type="text" placeholder='Enter a prompt' />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <img src={assets.send_icon} alt="" />
            </div>
          </div>
          <p className="bottom-info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit tempora, rerum molestiae atque non veritatis ipsum! Quia ea at, eos nulla voluptas possimus rerum, quod porro nobis necessitatibus soluta inventore!
          </p>
        </div>
      </div>
    </div>
  )
}

export default Main
