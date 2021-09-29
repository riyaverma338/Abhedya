import React from 'react'
import '../css/News.css'
import { useEffect } from 'react'
import pic5 from '../assets/pic5.jpg'
import pic6 from '../assets/pic6.jpg'
import pic7 from '../assets/pic7.jpg'
import AOS from "../../node_modules/aos";
import "aos/dist/aos.css";

export default function News() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return (
        <>
        <section style={{backgroundColor:"#f1f2f6"}}>
        <h1 style={{fontWeight:700, textAlign:'center', marginTop:200, marginBottom:50, paddingTop:90}} data-aos="fade-up">News & Events</h1>
        <div className="news" id="news" data-aos="fade-up">
            <img src={pic5} width="520" height="420"/>
            <div style={{paddingLeft:60}} data-aos="fade-up" >
            <img src={pic6} height="200"/>
            <img src={pic7} height="220" style={{paddingTop:20}}/>
            </div>
            <div className="text" style={{paddingLeft:10, display:'flex', flexDirection:'column', }}>
                <h3 style={{fontWeight:700}}>Job Opportunities: <br/> Digital, Marketing</h3>
                <h3 style={{paddingTop:140, fontWeight:700}}>What happened to new viral video?</h3>
               
            </div>
        </div>
        <h5 style={{paddingLeft:100, fontWeight:700, paddingTop:10, paddingBottom:100}}>Lorem ipsum dolor sit amet, consectetur adipiscing <br/> ncididunt ut labore et dolore magna aliqua. </h5>
        </section>
        </>
    )
}
