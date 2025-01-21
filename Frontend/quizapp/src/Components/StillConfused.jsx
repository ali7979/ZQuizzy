import React from 'react'
import '../Components/StillConfused.css'
import g2 from '../assets/g2.png'

const StillConfused = () => {
  return (
    <div>
    

      <div className='outerbox'>

<div className='inner'>
  <div data-aos="zoom-in-right" data-aos-duration="800" className='imagecontainer'>
  <img src={g2}/>
    </div>
    <div className='textcontainer'>
    <h1 style={{textAlign:'center'}}>Still Stressed about <span style={{color:'#47a6e6'}}>exams?</span></h1>

    <p data-aos="fade-down">Take a chill pill and let go of the stress,
ZQuizzy is here to help you feel your best!
No time to waste? No need to worry,
Upload your notes, and we'll handle the flurry.

Prepare smarter, not harder, with ease,
Test your knowledge whenever you please.
Last-minute quizzes to sharpen your brain,
Making revision fun and never a pain.

From quick prep to confidence galore,
ZQuizzy ensures you're ready for more!
So relax, stay cool, and ace the test,
With ZQuizzy, you're set to be your best!"**</p>
    </div>
</div>
      </div>
    </div>
  )
}

export default StillConfused
