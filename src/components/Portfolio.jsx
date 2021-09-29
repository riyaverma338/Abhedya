import React from 'react'
import '../css/Portfolio.css'
import pic1 from '../assets/pic1.jpg'
import pic2 from '../assets/pic2.jpg'
import pic3 from '../assets/pic3.jpg'
import pic4 from '../assets/pic4.jpg'

export default function Portfolio() {
    return (
        <>
        <h1 style={{textAlign:'center', fontWeight:700, marginTop:100, marginBottom:50}} id="portfolio">Portfolio</h1>
        <div className="collage" data-aos="fade-up">
        <div className="collage-1">
            <img src={pic1} width="600" />
            <h2>Effortless<br/><span style={{color:'red', fontSize:20}}>Branding</span></h2>
            <img src={pic3} width="600"/>
           </div>
           <div className="collage-2" data-aos="fade-up"> 
            <img src={pic2} width="600" height="1000" style={{paddingLeft:50}}/>
            <h2 style={{paddingLeft:50, paddingTop:10}}>Maki<br/><span style={{color:'red', fontSize:20, paddingBottom:100}}>Website</span></h2>
            <img src={pic4} width="600" style={{paddingLeft:50}}/>
        </div>
        </div>

        </>
    )
}
