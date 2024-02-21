import React from 'react'
import './About.css'
import Aryan_cv from '../assets/Aryan_Bali_Oresume.pdf'
import Learningimg from '../assets/Learning.svg'
export default function About() {
  return (
    <section id="Section2">
        {/* <div id="about-part1">
            <h1 id='about-heading'>About</h1>
        </div> */}
        <div id="about-part1">
            <h1 id='about-heading'>About Me</h1>
            <p id="about-para1">
            I embarked my journey as a BCA Bacholar of Computer Application student at SVSD Bhatoli Government College UNA in 2021.Good knowledge of frontend development skills.I am passionate about staying abreast of the latest industry trends, continously expanding my skill set.Looking to join the workforce to gain real-world experience.Ability to complete tasks on time in both individual and team settings.Dependable and reliable, ready to learn and grow with your company.</p>
        <p id="para-after">Your dream + my expertise = Scalable, Performant, Reliable and Intuitive products. Let's build something extraordinary</p>
        <button id="about-part1-btn">
            <a href={Aryan_cv} id="about-part1-anchor" download="Aryan_resume">Download CV</a>
            </button>    
        </div>
        <div id="part2">
            <img src={Learningimg} alt="error" id="about-part2-image" />
        </div>
    </section>
  )
}
