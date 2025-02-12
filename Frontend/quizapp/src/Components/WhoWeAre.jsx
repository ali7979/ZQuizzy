import React from "react";
import ic1 from '../assets/ic1.png'
import ic2 from '../assets/ic2.png'
import ic3 from '../assets/ic3.png'
import grl from '../assets/g.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

const WhoWeAre = () => {
    AOS.init();
  return (
    <div className="who-we-are">
      <div className="content" data-aos="fade-right"   
    data-aos-duration="1000" data-aos-offset="200">
        <h1>Who We Are</h1>
        <div className="features"  data-aos="zoom-in-right"  data-aos-duration="1200">
          <div className="feature">
            <div className="icon" data-aos="zoom-in"
     data-aos-easing="ease-out-cubic"
     data-aos-delay="1000">
              {/* Add an icon here */}
              <img src={ic1} alt="Lightbulb icon" />
            </div>
            <div>
              <h3>Interactive & Engaging Learning</h3>
              <p>Reinforce your understanding with **auto-generated quizzes**, allowing you to **test yourself, track progress, and improve weak areas** effectively</p>
            </div>
          </div>
          <div className="feature">
            <div className="icon"data-aos="zoom-in"
     data-aos-easing="ease-out-cubic"
     data-aos-delay="1100">
              {/* Add an icon here */}
              <img src={ic2} alt="Gear icon" />
            </div>
            <div>
              <h3>Save Time, Study Smarter</h3>
              <p>With **AI-generated quizzes tailored to your notes**, you can focus on **key topics**, maximize learning efficiency, and **boost your exam performance**</p>
            </div>
          </div>
          <div className="feature">
            <div className="icon" data-aos="zoom-in"
     data-aos-easing="ease-out-cubic"
     data-aos-delay="1200"
     >
              {/* Add an icon here */}
              <img src={ic3} alt="Team icon" />
            </div>
            <div>
              <h3>Transform Your Notes Instantly</h3>
              <p>Upload your study material as **text, image, or PDF**, and our AI will automatically generate **multiple-choice quizzes** to help you retain key concepts</p>
            </div>
          </div>
        </div>
      </div>
      <div className="image" data-aos="fade-left"   
    data-aos-duration="1000" data-aos-offset="400">
        <img
          src={grl}
          alt="Team presenting a project"
          className="team-image"
        />
      </div>
    </div>
  );
};

export default WhoWeAre;
