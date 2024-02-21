import React from 'react'
import Aryanimg from '../assets/Aryan2-removebg-preview.png'
import './Homesecton.css'
export default function Portfoliohome() {
  return (
    // <div id='Home'>
    //   <div className="Home-part" id='left'>

    //     <h1 className="home-h1">
    //         Aryan Bali,
    //     </h1>
    //     <h1 className="home-h1" id='last-home-h1'>
    //         <span id='left-span'>FrontEnd Developer</span>
    //     </h1>
    //         <p id="para2">Passionate about coding and eager to learn new things.</p>

    //   </div>
    //   <div className="Home-part"id='right'>
    //   <div id="Home-img-right">
    //         <img src={Aryanimg} alt="error" id="right-img1" />
    //     </div>
    //   </div>
    // </div>
    <section id="section1">
        <div className="container1">
            <p id="para1">Hi Aryan Bali here,</p>
            <p id="para2">Frontend developer passionate about coding and eager to learn new things.</p>
            <div className="byttons">
                <button id="btn2" className="btnss">
                    <a  rel="noreferrer" href="https://www.linkedin.com/in/aryanbali109" target='_blank'>Linked In</a></button>
                <button id="btn1" className="btnss"><a href="#section5">Let's talk</a></button>
            </div>
        </div>
        <div className="prof-img" id="prof-img">
            <img src={Aryanimg} id="Homeimg" alt="Error" />
        </div>
    </section>
  )
}
