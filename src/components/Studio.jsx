import React from 'react';
import { useEffect } from 'react';
import '../css/Studio.css';
import man from '../assets/man.jpg';
import room from '../assets/room.jpg'
import woman from '../assets/woman.jpg';
import AOS from "../../node_modules/aos";
import "aos/dist/aos.css";
export default function Studio() {
    useEffect(() => {
       
        AOS.init();
        AOS.refresh();
      }, []);
    return (
        <>
        <div className="container" id="studio" data-aos="fade-up">
            <h1 style={{fontWeight:700, marginBottom:30}} >Let us create...</h1>
        <div className="text">
           <div style={{paddingRight: 30}}>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, Duis aute irure dolor in reprehenderit in voluptate velit.<br/> <br/> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
           </div>
           <div style={{paddingLeft: 30}}>
           Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt
           </div>
        </div>
        </div>

        <div className="images">
            <img src={room} height="420" width="400"/>
            <div className="content" style={{backgroundColor:'black', color:'white',paddingTop:80, paddingLeft:30, paddingRight:30}}>
                <h2 style={{fontSize:35}} data-aos="fade-up">We're - idealists and startegic thinkers.</h2>
                <p>Over 6 years in video business.</p><br>
                </br> <p>Real news & events <br/>work with us</p>
            </div>
        <div class="slides">
  <img class="slide_one" src={man} height="420" width="650" alt="man"/>
  <img class="slide_two" src={woman} height="420" width="650" alt="woman"/>
</div>
</div>
        </>
    )
}
