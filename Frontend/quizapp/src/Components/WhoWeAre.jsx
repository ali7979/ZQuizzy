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
              <h3>Contemporary Living Model For Everyone</h3>
              <p>Sample text. Click to select the Text Element.</p>
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
              <h3>Thousands Of Ingenious Projects Worldwide</h3>
              <p>Sample text. Click to select the Text Element.</p>
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
              <h3>Building Services & Consumer Electronics</h3>
              <p>Sample text. Click to select the Text Element.</p>
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
