import React, { useState } from "react";
import "./Create.css";
import logo from "../assets/logo.png";
import search from "../assets/search.png";
import magic from "../assets/magicwand.png";
import { useNavigate } from "react-router-dom";

const Create = () => {

  const navigate = useNavigate();
  const [topic, settopic] = useState("")

  const handleTopic = (event) => {
  settopic(event.target.value);
      
    };


    const handleClick=()=>{
      
      event.preventDefault(); 
      if (!topic.trim()) return; 
    
      const formattedTopic = topic.toLowerCase().replace(/\s+/g, '-');
      navigate(`/pquiz/${formattedTopic}`);
    }


  return (
    <div>
      <div className="cbox">
        <h2>Or</h2>
        <h1>Create Your Own </h1>
        <div data-aos="flip-up" className="cinnerbox">
          <div  className="round" >
            <img data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-delay="500" src={logo} className="clogoimg" alt="logo" />
          </div>
          <div class="boxs">
    <form name="search" className="form" onSubmit={handleClick}>
    <img className="i" src={search}/>

        <input type="text" class="input" name="txt" onmouseout="this.value = ''; this.blur();" onChange={handleTopic}/>
        <button type="submit" class="btn" >

        <img className="magiciconn" src={magic}/>

        </button>

    </form>

</div>
        </div>
      </div>
    </div>
  );
};

export default Create;
