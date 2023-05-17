import React from 'react'
import './Contact.css'
import {MdCall} from 'react-icons/md'
import {BsFillChatDotsFill} from 'react-icons/bs'
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'


const Contact = () => {
  return (
 <section className='c-wrapper' id='contact'>
  <div className='paddings innerWidth flexCenter c-container'>
    {/*left side */}
    < div className='flexColStart   c-left'>
      <span className='orangeText'>Our Contact</span>
      <span className='primaryText'>Easy to Contact</span>
      <span className='secondaryText'>
        We always ready to help by providing the best server belive 
        to a good blace to live can make your life better
      </span>

<div className='flexColStart contactModes'>
{/*first row */}
<div className='flexStart row'>
<div className='flexColCenter mode'>
  <div className='flexStart'>
    <div className='flexCenter icon'>
      <MdCall  size={25} />
    </div>
<div className='flexColStart detail'>
<span className='primaryText'>Call</span>
<span className='secondaryText'>021 123 124 555</span>
</div>
  </div>
<div className='flexCenter button' >Call Now</div>
</div>
{/*second mode */}
<div className='flexColCenter mode'>
  <div className='flexStart'>
    <div className='flexCenter icon'>
      <BsFillChatDotsFill  size={25} />
    </div>
<div className='flexColStart detail'>
<span className='primaryText'>Chat</span>
<span className='secondaryText'>021 123 124 555</span>
</div>
  </div>
<div className='flexCenter button' >Chat Now</div>
</div>



</div>

{/*second row */}
<div className='flexStart row'>
<div className='flexColCenter mode'>
  <div className='flexStart'>
    <div className='flexCenter icon'>
      <BsFillChatDotsFill  size={25} />
    </div>
<div className='flexColStart detail'>
<span className='primaryText'>Video Call</span>
<span className='secondaryText'>021 123 124 555</span>
</div>
  </div>
<div className='flexCenter button' >Video Call Now</div>
</div>
{/*fourth mode */}
<div className='flexColCenter mode'>
  <div className='flexStart'>
    <div className='flexCenter icon'>
      <HiChatBubbleBottomCenter size={25} />
    </div>
<div className='flexColStart detail'>
<span className='primaryText'>Message</span>
<span className='secondaryText'>021 123 124 555</span>
</div>
  </div>
<div className='flexCenter button' >Message Now</div>
</div>



</div>



 
 </div>

</div>
  


{/*right side */}
<div className='c-right'>
  <div className='contact-container'>
<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d38108.9935831801!2d17.18757518692873!3d44.77126559073476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ssr!2sba!4v1683299030180!5m2!1ssr!2sba" width="600" height="450"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

    {/* <img src='./contact.jpg'  alt=''/>*/}
    

  </div>

</div>

  </div>

 </section>
  )
}

export default Contact