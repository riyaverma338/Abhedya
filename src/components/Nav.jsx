import React from 'react'
import '../css/Nav.css';

export default function Nav() {
    return (
        <>
        <div>
        <nav className="nav bg-light shadow p-3 bg-white rounded" style={{height:65, alignItems:'center'}}>
        <a className="nav-link active" href="#" style={{fontSize:25,fontWeight:600, color:'black', paddingTop:0, color:'yellow'}}>Title</a>
        <div className="links">
  <a className="nav-link" href="#home">Home</a>
  <a className="nav-link" href="#studio">Our Studio</a>
  <a className="nav-link" href="#portfolio">Portfolio</a>
  <a className="nav-link" href="#news">News & Events</a>
  <a className="nav-link" href="#contact">Contact Us</a> 
  </div>
</nav>
</div>
</>

    )
}
