import React, { useState,useEffect } from "react";
import Completed from "../assets/p3.gif"
import { useNavigate } from "react-router-dom";


const Submit = ({ score }) => {

const navigate= useNavigate();

const [perc, setperc] = useState(0)


    useEffect(() => {
      const timeout = setTimeout(() => {
        setperc((score/10)*100); // Set the actual percentage after the component mounts
      }, 100); // Small delay to allow CSS transition
      return () => clearTimeout(timeout); // Cleanup on component unmount
    }, [perc]);

var quote="";
    if (perc === 100) {
        quote= "🌟 Perfect! You nailed it! 🌟";
      } else if (perc >= 80) {
        quote= "Great job! You're almost at the top! 💪";
      } else if (perc >= 50) {
        quote= "Good effort! Keep pushing forward! 🚀";
      } else {
        quote= "Don't give up! Every attempt makes you stronger! 🌱";
      }
    
     


    
  return (
    <>
    
    <div  style={{padding:'4rem'}}>
        <div className="imgbox" style={{height:'12rem',display:'flex',justifyContent:'center'}}>        <img src={Completed} />
        </div>
      <h1 style={{textAlign:'center'}}>Quiz Completed!</h1>
      <h2 style={{textAlign:'center',marginTop:'3rem'}}>Your Scored : {score}</h2>
      <p style={{textAlign:'center' ,margin:'2rem auto'}}>{quote}</p>
      <div className="progress">
        <div style={{  width: `${perc}% `, transition: "width 1s ease-in-out",  }} className="progress2"></div>
      </div>

<div style={{display:'flex',justifyContent:'center', marginTop:'3rem'}}>
      <button className="button-77" onClick={()=>{navigate("/")}} >Back to Home</button>
      </div>
    </div>
    </>
  );
};

export default Submit;
