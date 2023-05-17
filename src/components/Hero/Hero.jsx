import React from 'react'
import "./Hero.css"
//import { HiLocationMarker } from 'react-icons/hi';
import CountUp from 'react-countup';
import { motion } from 'framer-motion'


const Hero = () => {
  return (
    <section className='hero-wrapper'>
      <div className='paddings innerWidth flexCenter hero-container '>


        <div className='flexColStart   hero-left'>
          <div className='hero-title'>
            <div className='orange-circle' />
            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 2,
                type: "spring"
              }}

            >



            Welcome!  <br />to our<br /> Company</motion.h1>
          </div>
          <div className='flexColStart  hero-des'>
            <span className='secondaryText'>
              The company operates in the field of construction and architecture, 
            </span>
            <span className='secondaryText'  >and offers services in the construction of high-rise buildings.</span>
          </div>
          {/*
            <div className='flexCenter search-bar'>
            <HiLocationMarker color="var(--blue)" size={25} />
            <input type='text' />
            <button className='button'> Search</button>
          </div>
          
          */}
        

          <div className='flexCenter stats'>

            <div className='flexColStart stat'>
              <span>
                <CountUp start={330} end={500} duration={4} />
                <span>+</span>
              </span>
              <span className='secondaryText'>Projects</span>
            </div>

            <div className='flexColStart stat'>
              <span>
                <CountUp start={45} end={120} duration={4} />
                <span>+</span>
              </span>
              <span className='secondaryText'  >Employed People </span>
            </div>

            <div className='flexColStart stat'>
              <span>
                <CountUp end={30} />
                <span>+</span>
              </span>
              <span className='secondaryText'  >Years of experience </span>
            </div>



          </div>

        </div>


        <div className='flexCenter   hero-right'>
          <motion.div 
          initial={{x: "7rem", opacity: 0}}
          animate={{x:0, opacity: 1}}
          transition={{
            duration: 2,
            type: "spring" ,
          }}
          className='image-container'>
            <img src='./build2.jpg' alt='' />

          </motion.div>
        </div>

      </div>

    </section>
  )
}

export default Hero