import React from 'react'
import './GetStarted.css'

const GetStarted = () => {
  return (
   <section className='g-wrapper' id='getstarted'>
    <div className='paddings innerWidth g-container'>
      <div className='flexColCenter inner-container'>
        <span className='primaryText'>Get Started </span>
        <span className='secondaryText'>
         download our entire catalog
          <br/>
          find your ideal solution
        </span>
        <button className='button'>
         <a href='mailto:zainkeepscode@gmail.com'>Download</a>
        </button>

      </div>

    </div>

   </section>
  )
}

export default GetStarted
