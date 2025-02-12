import React, { useState  } from "react";
import { useNavigate } from 'react-router-dom';
import Header from "../Components/Header";
import i1 from '../assets/i11.png'
import i2 from '../assets/oops.png'
import i3 from '../assets/dsa.png'
import i4 from '../assets/os.png'
import i5 from '../assets/network.png'
import i6 from '../assets/js.png'
import i7 from '../assets/react.png'
import i8 from '../assets/node.png'
import i9 from '../assets/c-sharp.png'
import i10 from '../assets/i10.png'
import i11 from '../assets/i11.png'
import i12 from '../assets/i12.png'
import i13 from '../assets/i13.png'
import i14 from '../assets/i14.png'
import i15 from '../assets/i15.png'
import i16 from '../assets/i16.png'
import i17 from '../assets/i17.png'
import i18 from '../assets/i18.png'
import i19 from '../assets/i19.png'
import i20 from '../assets/i20.png'

import Section from '../Components/Section'
import WhoWeAre from "../Components/WhoWeAre";
import Stats from "../Components/Stats";
import StillConfused from "../Components/StillConfused";
import Footer from "../Components/Footer";
import Create from "../Components/Create";


const Home = () => {
  const navigate = useNavigate();

  const handleTopic = (event) => {
    // Get the inner text of the clicked h3 element
    const topic = event.currentTarget.querySelector('h3').innerText;

    // Format the topic text (e.g., replace spaces with dashes and make it lowercase)
     const formattedTopic = topic.toLowerCase().replace(/\s+/g, '-');

    // Navigate to the Quiz component with the formatted topic
    navigate(`/pquiz/${formattedTopic}`);
  };

  return (
    <div >
     <Header/>
        <div>
          <div className="box">
            <div className="headings">
            <h1 style={{textAlign:'center'}}>Welcome to <span data-aos-delay="300" style={{color:'#47a6e6'}} data-aos="zoom-in-up" data-aos-duration="1500"
     data-aos-anchor-placement="top-center">ZQuizzy !</span></h1>
            <h3 style={{textAlign:'center',letterSpacing:'1.2px'}} data-aos="flip-down" data-aos-duration="700"> Dive into a world of interactive quizzes and personalized learning designed to make your revision sessions smarter, faster, and more effective—helping you ace your exams with confidence. </h3>
            <div className="btnset"> 
<button data-aos="fade-up"
     data-aos-anchor-placement="top-center" data-aos-offset="-300" data-aos-duration="1500" className="button-77" onClick={() => navigate('/quiz')}>Generate using Image</button>
<button data-aos="fade-up"
     data-aos-anchor-placement="top-center" data-aos-offset="-300" data-aos-duration="1500" className="button-77" onClick={() => navigate('/pdf')}>Generate using Pdf</button>
           </div>
           
            </div>
          
          </div>
          <div className="box2">

          <h2>Popular Quizzes</h2>
<div className="cards">

<div className="cardb" onClick={handleTopic}>
  <div className="card">
    <img src={i1}/>
  </div>
  <h3>DBMS Questionnaire</h3>
</div>

<div className="cardb" onClick={handleTopic}>
  <div className="card">
    <img src={i2}/>
    </div>
  <h3>OOPS Quiz</h3>
</div>
<div className="cardb" onClick={handleTopic}>
  <div className="card"><img src={i3} /></div>
  <h3>Data Structures Quiz</h3>
</div>
<div className="cardb" onClick={handleTopic}>
  <div className="card"><img src={i4} /></div>
  <h3>Operating Systems Quiz</h3>
</div>
<div className="cardb" onClick={handleTopic}>
  <div className="card"><img src={i5} /></div>
  <h3>Networks Quiz</h3>
</div>
<div className="cardb" onClick={handleTopic}>
  <div className="card"><img src={i6} /></div>
  <h3>JavaScript Basics</h3>
</div>
<div className="cardb" onClick={handleTopic}>
  <div className="card"><img src={i7} /></div>
  <h3>ReactJS Quiz</h3>
</div>
<div className="cardb" onClick={handleTopic}>
  <div className="card"><img src={i8} /></div>
  <h3>Node.js Quiz</h3>
</div>
<div className="cardb" onClick={handleTopic}>
  <div className="card"><img src={i9} /></div>
  <h3>C# Fundamentals</h3>
</div>
<div className="cardb" onClick={handleTopic}>
  <div className="card"><img src={i10} /></div>
  <h3>Python Programming</h3>
</div>
<div className="cardb" onClick={handleTopic}>
  <div className="card"><img src={i11} /></div>
  <h3>SQL Queries</h3>
</div>
<div className="cardb" onClick={handleTopic}>
  <div className="card"><img src={i12} /></div>
  <h3>Algorithms Quiz</h3>
</div>
<div className="cardb" onClick={handleTopic}>
  <div className="card"><img src={i13} /></div>
  <h3>Cloud Computing</h3>
</div>
<div className="cardb" onClick={handleTopic}>
  <div className="card"><img src={i14} /></div>
  <h3>AI and ML Basics</h3>
</div>
<div className="cardb" onClick={handleTopic}>
  <div className="card"><img src={i15} /></div>
  <h3>Cybersecurity Quiz</h3>
</div>
<div className="cardb" onClick={handleTopic}>
  <div className="card"><img src={i16} /></div>
  <h3>HTML & CSS</h3>
</div>
<div className="cardb" onClick={handleTopic}>
  <div className="card"><img src={i17} /></div>
  <h3>DevOps Practices</h3>
</div>
<div className="cardb" onClick={handleTopic}>
  <div className="card"><img src={i18} /></div>
  <h3>AngularJS Basics</h3>
</div>
<div className="cardb" onClick={handleTopic}>
  <div className="card"><img src={i19} /></div>
  <h3>Software Engineering</h3>
</div>
<div className="cardb" onClick={handleTopic}>
  <div className="card"><img src={i20} /></div>
  <h3>Blockchain Technology</h3>
</div>


</div>


<Create/>
          </div>
        </div>
        <StillConfused/>
        <Section/>
        <WhoWeAre/>
        <Stats/>




        <Footer/>

      
    </div>


  );
};

export default Home;
