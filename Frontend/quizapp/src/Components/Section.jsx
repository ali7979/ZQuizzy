import React from 'react'
import { useNavigate } from 'react-router-dom'

const Section = () => {

  return (
    <div>
        <div className='section1'>

<h2  data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom" data-aos-offset="100" style={{fontSize:'3.5rem',letterSpacing:'2px',textAlign:'center'}}>   What is <span style={{color:'#47a6e6'}}> ZQuizzy ?</span>
</h2>
        <p data-aos="zoom-in-up" data-aos-offset="120" data-aos-duration="500"style={{fontSize:'1.5rem',fontWeight:'250',letterSpacing:'1.5px',textAlign:'center'}}>


        
     
        ZQuizzy is an innovative learning platform designed to help students revise smarter and faster. Simply upload your notes as images, text, or PDFs, and our AI-powered system will instantly generate multiple-choice quizzes tailored to your content.

        Why Choose ZQuizzy?
🚀 Time-Saving – No need to manually create questions—our AI does it for you.
🧠 Smart Learning – Interactive quizzes make revision engaging and effective.
📚 Supports Various Formats – Works with text, images, and PDFs.
🎯 Personalized Experience – Get quizzes based on your specific study material.
             </p>
             <button >CLICK HERE TO EXPLORE</button>

        </div>
    </div>
  )
}

export default Section
