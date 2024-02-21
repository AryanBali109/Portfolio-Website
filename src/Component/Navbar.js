import React, { useState } from 'react'
// import menusvg from '../assets/icons8-menu.svg'
import menupng from '../assets/menu1.png'
import crosspng from '../assets/cross1.png'
export default function Navbar() {
    const [mbnotdisplay,mbdisplay] = useState(false)
    const click = ()=>{
        mbdisplay(!mbnotdisplay)
    }
    // menue icon changeness
    // let change = (elem)=>{
    //     return mbnotdisplay?elem.src = menupng:elem.src = "X"
    // }
  return (
    <>
    <div className='navbar'>
      <nav>
        <h1 className='nav-heading'>Aryan Bali</h1>
        <div className="menu">
            {/* <button onClick={click} className='m-bar-btn'>X</button> */}
            <button  id='menupngimg' onClick={click}>
            {
                mbnotdisplay? <img className='m-img' alt='error' src={crosspng}/> :<img className='m-img' src={menupng}  alt="error" />
            }
            </button>
        </div>
        <Collapse/>
      </nav>
    </div>
{
    mbnotdisplay? <Notcollapse/>:null
}
    </>
  )
}

function Collapse(props) {
    return (
        <ul className='nav-ul'>
        <li className="li">
            <a className="a"href="#section1">Home</a>
        </li>
        <li className="li">
            <a className="a"href="#Section2">About</a>
        </li>
        <li className="li">
            <a className="a"href="#section5">Contact us</a>
        </li>
        <li className="li">
            <a className="a"href="#Section3">Skills</a>
        </li>
        <li className="li">
            <a className="a"href="#section4">Projects</a>
        </li>
    </ul>
    )
}
function Notcollapse(){
    return(
        <ul className='s-ul'>
            <li className="cl-a">
                <a href="#section1" className="cl-1">Home</a>
            </li>
            <li className="cl-a">
            <a href="#Section2" className="cl-1">About</a>
            </li>
            <li className="cl-a">
            <a href="#section5" className="cl-1">Contact</a>
            </li>
            <li className="cl-a">
            <a href="#Section3" className="cl-1">Skills</a>
            </li>
            <li className="cl-a">
            <a href="#section4" className="cl-1">Projects</a>
            </li>
        </ul>
    )
}