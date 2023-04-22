import React from 'react'
import "./footer.css"
const Footer = () => {
  return (
    <footer class="footer">
  <div class="footer-left col-md-4 col-sm-6">
    <p class="about">
      <span> About the website</span>
      this website is multi purpose as it can  scan target  website for open ports,fetch cybersecurity news 
    </p>
    
  </div>
  <div class="footer-center col-md-4 col-sm-6">
    <div>
      <i class="fa fa-map-marker"></i>
      <p><span> Street name and number</span> City, Country</p>
    </div>
    <div>
      <i class="fa fa-phone"></i>
      <p> (+00) 0000 000 000</p>
    </div>
    <div>
      <i class="fa fa-envelope"></i>
      <p><a href="#"> HackTrick@company.com</a></p>
    </div>
  </div>
  <div class="footer-right col-md-4 col-sm-6">
    <img style={{"width":"50px","heigh":"50px",borderRadius:"25px"}}src="https://media.istockphoto.com/id/1335169133/vector/cyber-security-line-icon-shield-with-electronic-components-and-padlock.jpg?s=612x612&w=0&k=20&c=9Wb9umNUOwZm3_vZyt1cfHBxPKi-NIDyenBfJgO7C2M=" alt="Logo Company"/>
    <p class="menu">
      <a href="#"> Home</a> |
      <a href="#"> About</a> |
      <a href="#"> Services</a> |
      <a href="#"> Portfolio</a> |
      <a href="#"> News</a> |
      <a href="#"> Contact</a>
    </p>
    <p class="name"> HackTrick &copy; 2016</p>
  </div>
</footer>
  )
}

export default Footer