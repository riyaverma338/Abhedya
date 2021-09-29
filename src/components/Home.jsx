import React from 'react';
import '../css/Home.css';
import vid from '../assets/vid.mp4';
import Nav from './Nav'

export default function Home() {
    return (
        <>
        <div className="vid" id="home">
            {Nav}
           <video autoPlay loop muted style={{position:'relative', zIndex:0}}>
               <source src={vid} />
           </video>
           <div className="overlay" style={{position: 'absolute',
    bottom: 95,
    textAlign: 'center', left: 550,  color:'white'}} >
           <h2 style={{zIndex:1, fontSize:50,textAlign:'center',fontWeight:700}}>Title</h2>
               <p style={{fontSize:20}}>Create a great video for your <span style={{fontWeight:700, textDecoration:'underline'}}>website</span></p>
               </div>
            </div>
        </>
    )
}
