import React from 'react'
import './ProjectSection4.css'
import TextUtisl from '../assets/TeaxtUtisl.png'
import NewsMonkey from '../assets/NewsMonkey.png'
import TicTactToe from '../assets/TicTactToe.png'
import BlueTribe from '../assets/BlueTribeClone.png'
import UiLayoutFood from '../assets/UiFoodDelivery.png'
import AlarmClock from '../assets/Alarm-Clock.png'

export default function Projectsection() {
  return (
    <section id="section4">
        <h1 id="section3-heading">Projects</h1>
        <p id="section3heading-para">Check out some of my work -</p>
        <div className="section4container">
          <div className="section4boxes" id='section4box1'>
            <img className='section4-images' id='section4-box1-image' src={TextUtisl} alt="error"/>
            <p className="project-description">Text utisl is a utility which can be used to manipulate your text as the way you want, you can remove extra spaces, copy the manipulated text as well as convert your text from uppercase to lowercase and lowercase to uppercase.Tech – Html5, Css3, JavaScript, React Js.Demo of this project are also available.Code is available to view click on Code.</p>
            <div className="section4-box-buttons" id="section4-box1-button">
              <button  className='section4-btnss common' id='box1-btn1'><a rel="noreferrer" href="https://github.com/AryanBali109/Text-Utisl" target='_blank' className="section4btnss-anchors" id="box1-anchors"> Code</a></button>
              <button className='section4-btnss' onClick={()=>{alert("Demo is not currently availaible")}} id='box1-btn2'>Demo</button>
            </div>
          </div>
          <div className="section4boxes" id='section4box2'>
            <img className='section4-images' id='section4-box2-image' src={NewsMonkey} alt="error"/>
            <p className="project-description">News monkey is a news app which can be used to grab quick daily news bites. if you are interested in news like sportspolitics then News Monkey is for you. It helps you to know what is happening in world. to automatically update daily news i use news api key.Demo of this project are not available.Code is available to view click on Code.</p>
            <div className="section4-box-buttons" id="section4-box2-button">
              <button  className='section4-btnss common' id='box2-btn1'><a rel="noreferrer" href="https://github.com/AryanBali109/News-Monkey" target='_blank' className="section4btnss-anchors" id="box2-anchors"> Code</a></button>
              <button className='section4-btnss' onClick={()=>{alert("Demo is not currently availaible")}} id='box2-btn2'>Demo</button>
            </div>
          </div>
          <div className="section4boxes" id='section4box3'>
            <img className='section4-images' id='section4-box3-image' src={TicTactToe} alt="error"/>
            <p className="project-description">Tic Tac Toe is traditionally played on a 3 × 3 grid. Players take turns placing a mark in one of the cells of the grid. The goal of the game is for players to position their marks so that they make a continuous line of three cells vertically, horizontally, or diagonally.Demo of this project are also available.Code is available to view click on Code.</p>
            <div className="section4-box-buttons" id="section4-box3-button">
              <button  className='section4-btnss common' id='box3-btn1'><a rel="noreferrer" href="https://github.com/AryanBali109/Tic-Tac-Toe-game" target='_blank' className="section4btnss-anchors" id="box3-anchors"> Code</a></button>
              <button className='section4-btnss' onClick={()=>{alert("Demo is not currently availaible")}} id='box3-btn2'>Demo</button>
            </div>
          </div>
          <div className="section4boxes" id='section4box4'>
            <img className='section4-images' id='section4-box4-image' src={BlueTribe} alt="error"/>
            <p className="project-description">Blue tribe is a clone of blue tribe plant-based meat website currently I am working on it to make it similar to original website. Technology used in this project are htmls, css, javascript. Demo of this project are also not available.Code is available to view click on Code.</p>
            <div className="section4-box-buttons" id="section4-box4-button">
              <button  className='section4-btnss common' id='box4-btn1'><a rel="noreferrer" href="https://github.com/AryanBali109/Blue-Tribe-Clone" target='_blank' className="section4btnss-anchors" id="box4-anchors"> Code</a></button>
              <button className='section4-btnss' onClick={()=>{alert("Demo is not currently availaible")}} id='box4-btn2'>Demo</button>
            </div>
          </div>
          <div className="section4boxes" id='section4box5'>
            <img className='section4-images' id='section4-box5-image' src={UiLayoutFood} alt="error"/>
            <p className="project-description">Simple Ui layout of food website currently in working state.To make it similar to zomato currently i am learning some new skills to make it similar to zomato. Technology used in this project are htmls, css, javascript.Demo of this project are also not available.Code is available to view click on Code.</p>
            <div className="section4-box-buttons" id="section4-box5-button">
              <button  className='section4-btnss common' id='box5-btn1'><a rel="noreferrer" href="https://github.com/AryanBali109/Ui-Food-Website" target='_blank' className="section4btnss-anchors" id="box5-anchors"> Code</a></button>
              <button className='section4-btnss' onClick={()=>{alert("Demo is not currently availaible")}}  id='box5-btn2'>Demo</button>
            </div>
          </div>
          <div className="section4boxes" id='section4box6'>
            <img className='section4-images' id='section4-box6-image' src={AlarmClock} alt="error"/>
            <p className="project-description">Alarm-Clock it is an alarm clock this project also display the time in seconds, minutes and hours.I used this to set any alarm. It is fully responsive. Technology used in this project are htmls, css, javascript.Demo of this project are also not available.Code is available to view click on Code.</p>
            <div className="section4-box-buttons" id="section4-box6-button">
              <button  className='section4-btnss common' id='box6-btn1'><a rel="noreferrer" href="https://github.com/AryanBali109/Alarm-Clock" target='_blank' className="section4btnss-anchors" id="box6-anchors"> Code</a></button>
              <button className='section4-btnss' onClick={()=>{alert("Demo is not currently availaible")}} id='box6-btn2'>Demo</button>
            </div>
          </div>


        </div>
            
    </section>
  )
}
