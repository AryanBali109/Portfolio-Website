import React from 'react'
import './Skillsection3.css'
import HTML5 from '../assets/HTML5.png'
import CSS3 from '../assets/CSS3.png'
import JS from '../assets/Java-Script.png'
import REACTJS from '../assets/ReactJs.png'
import GIT from '../assets/Git.png'
import GITHUB from '../assets/GitHub.png'
import WORDPRESS from '../assets/WordPress.png'
import CLanguage from '../assets/c_Language.png'
import C_Plus_Language from '../assets/C_plus_plus.png'
// import ResponsiveWebsiteDesign from '../assets/Responsive-Website-Design.png'
export default function Skillsection() {
  return (
    <section id="Section3">
        <h1 id="section3-heading">Skills</h1>
        <p id="section3heading-para">This are the technologies I've worked with -</p>
        <div className="section3-container">
            <div id="Section3-box1" className='section3boxes'>
                <img id='HTML-image' className='section-images' src={HTML5} alt="error" />
                <p className="section-para" id="section-para1">HTML</p>
            </div>
            <div id="Section3-box2" className='section3boxes'>
                <img id='CSS-image' className='section-images' src={CSS3} alt="error" />
                <p className="section-para" id="section-para2">CSS</p>
            </div>
            <div id="Section3-box3" className='section3boxes'>
                <img id='JS-image' className='section-images' src={JS} alt="error" />
                <p className="section-para" id="section-para3">Java Script</p>
            </div>
            <div id="Section3-box4" className='section3boxes'>
                <img id='React-image' className='section-images' src={REACTJS} alt="error" />
                <p className="section-para" id="section-para4">React Js</p>
            </div>
            <div id="Section3-box5" className='section3boxes'>
                <img id='Git-image' className='section-images' src={GIT} alt="error" />
                <p className="section-para" id="section-para5">Git</p>
            </div>
            <div id="Section3-box6" className='section3boxes'>
                <img id='GitHub-image' className='section-images' src={GITHUB} alt="error" />
                <p className="section-para" id="section-para6">GitHub</p>
            </div>
            <div id="Section3-box7" className='section3boxes'>
                <img id='WordPress-image' className='section-images' src={WORDPRESS} alt="error" />
                <p className="section-para" id="section-para7">WordPress</p>
            </div>
            <div id="Section3-box8" className='section3boxes'>
                <img id='C-image' className='section-images' src={CLanguage} alt="error" />
                <p className="section-para" id="section-para8">C Language</p>
            </div>
            <div id="Section3-box9" className='section3boxes'>
                <img id='C-plus-image' className='section-images' src={C_Plus_Language} alt="error" />
                <p className="section-para" id="section-para9">C++ Language</p>
            </div>
            {/* <div id="Section3-box10" className='section3boxes'>
                <img id='Responsive-website-design-image' className='section-images' src={ResponsiveWebsiteDesign} alt="error" />
                <p className="section-para" id="section-para10">Responsive Website Design</p>
            </div> */}
        </div>
    </section>
  )
}
