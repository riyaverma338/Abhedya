import React from 'react'
import '../css/Contact.css'
import AOS from "../../node_modules/aos";
import "aos/dist/aos.css";
import { useEffect } from 'react'

export default function Contact() {
    useEffect(() => {
       
        AOS.init();
        AOS.refresh();
      }, []);
    return (
        <>
        <h1 style={{fontWeight:700, textAlign:'center', marginTop:100, marginBottom:50}} data-aos="fade-up">Don't be shy, write to us</h1>
        <div id="contact" data-aos="fade-up">
        <form>
  <div class="form">
      <div className="row">
    <div class="col-md-6 form-group required">
    <label class="control-label mb-2" for="inputEmail4">Name</label>
      <input type="text" class="form-control" placeholder="Full name"/>
    </div>
    <div class="col-md-6 form-group required">
    <label class="control-label mb-2" for="inputEmail4">Email</label>
      <input type="text" class="form-control" placeholder="Email Address"/>
    </div>
    <div className="mt-4">
    <label for="inputEmail4" className="mb-2">How can we help you?</label>
  <textarea className="form-control" placeholder="Tell us about the project" id="my-box" rows="8"></textarea>
</div>
<div className="form-group required">
<label className="control-label mt-4 mb-2 ">Services</label>
</div>
<div className="form-check d-flex-start justify-content-evenly px-3">
<div class="form-check form-check-inline ">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
  <label class="form-check-label" for="inlineCheckbox1">Branding</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"/>
  <label class="form-check-label" for="inlineCheckbox2">Digital Experiences</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"/>
  <label class="form-check-label" for="inlineCheckbox2">Web Development</label>
</div>
</div>
    </div>
  </div>
<div className="text-center mt-5">
  <button className="btn">SEND MESSAGE</button>
  </div>
</form>
        </div>
        </>
    )
}
