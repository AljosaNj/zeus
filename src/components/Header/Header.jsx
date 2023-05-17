import React,{useState} from 'react'
import './Header.css'
import {BiMenuAltRight} from 'react-icons/bi'
import { FaTimes } from "react-icons/fa";
//import OutsideClickHandler from 'react-outside-click-handler'

const Header = () => {
const [menuOpened, setMenuOpened] = useState(false)
  const [activeNav, setActiveNav] = useState("#");

 const [click, setClick] = useState(false);
 const handleClick = () => setClick(!click);


const getMenuStyles = (menuOpened) => {
  if (document.documentElement.clientWidth <= 800)
  {
    return {right: !menuOpened &&  "-100%" }
  }
}

  return (
   <section className='h-wrapper'>
    <div className='flexCenter paddings innerWith   h-container'>





 <img src='./logo3.png' alt="logo" width={100} />

    
     
     {/*
       <OutsideClickHandler
     onOutsideClick={()=> {
      setMenuOpened(false)
     }}
     >

     
     */}
   
    

     <div className= {click ? ' h-men-active ' : 'h-menu  flexCenter'  }
    
     >
      <a href='#residencies'   onClick={() => {
          setActiveNav("#");
        }}  >Projects</a>
       <a href='#value'  onClick={() => {
          setActiveNav("#");
        }}      >Services</a>
        <a href='#contact'   onClick={() => {
          setActiveNav("#");
        }}    >Contact Us</a>
         <a href='#getstarted'   onClick={() => {
          setActiveNav("#");
        }}      > Get Started</a>
         <button className='button'>
           <a href=''>Contact</a>
         </button>
     </div>
      {/* </OutsideClickHandler> */}
<div className='menu-icon' onClick={handleClick}>
  {click ? (
     <FaTimes className="iconhambx"  size={20} />
    
  ): (
    
    <BiMenuAltRight size={30} />
  )}
 

</div>

    </div>



   </section>
  )
}

export default Header