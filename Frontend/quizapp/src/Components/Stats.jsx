import React ,{ useState, useEffect }from 'react'
import './Stats.css'
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';


const Stats = () => {

const [counterOn, setcounterOn] = useState(false)













  return (
    <div className='stats'  data-aos="zoom-in-down" data-aos-duration="1000">
        <h1  >Our Stats</h1>
        <ScrollTrigger onEnter={()=> setcounterOn(true)} onExit={()=> setcounterOn(false)}>
        <div className="set">
        <div className="sbox" data-aos="fade-up" data-aos-duration="3000"><h2>{counterOn && <CountUp start={0} end={35} duration={2} delay={0}/>}+</h2><p>Categories</p></div>
        <div className="sbox"data-aos="fade-up" data-aos-duration="2000" ><h2>{counterOn && <CountUp start={0} end={5} duration={2} delay={0}/>}+</h2><p>Users</p></div>
        <div className="sbox"data-aos="fade-up" data-aos-duration="1000"><h2>{counterOn && <CountUp start={0} end={165} duration={2} delay={0}/>}+</h2><p>Questions</p></div>
        <div className="sbox" data-aos="fade-up" data-aos-duration="500"><h2>0</h2><p>Charges</p></div>

        </div>
        </ScrollTrigger>
    </div>
  )
}

export default Stats
