import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
    <div className='footer-container'>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h5>Rivkin Securities</h5>
            <div className='footer-link-items-column'>
            <h6>Address</h6>
            <p>1 Kings Cross Road, <br></br>
             Rushcutters Bay, NSW 2011
             </p>
            </div>
            
            <div className='footer-link-items-column'>
            <h6>Phone</h6>
            <p>1 300 748 546 <br></br>
            (1300 RIVKIN) 
            </p>
            </div>
          </div>
          <div className='footer-link-items'>
            <h5>Follow Us</h5>
            <ul>
            <li><a href="https://www.facebook.com"><i class="fab fa-facebook-f"></i></a></li>
            <li><a href="https://twitter.com"><i class="fab fa-twitter"></i></a></li>
            <li><a href="https://www.linkedin.com"><i class="fab fa-linkedin-in"></i></a></li>
            <li><a href="https://www.youtube.com"><i class="fab fa-youtube"></i></a></li>
          </ul>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          
          <div class='footer-link-items'>
            <h5>Explore</h5>
            <div class="menu-main-menu-container"><ul id="primary-menu" class="menu"><li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-1519"><a href="https://rivkin.com.au">Resources</a></li>
            </ul>
          </div>
        </div>
      </div>
    
    
      <div class="copyright-links mb-30">
      <nav class="footer-nav">
      <ul class="flex">
      <li><span>© 2022 Rivkin</span></li>
      <li><a href="/contact">Contact</a></li>
      <li><a href="https://rivkin.com.au">Terms &amp; Conditions</a></li>
      <li><a href="https://rivkin.com.au">FSG</a></li>
      <li><a href="https://rivkin.com.au">Privacy Policy</a></li>
      <li><a href="https://rivkin.com.au">Cookie Policy</a></li>
      <li><a href="https://rivkin.com.au">Important Reading</a></li>
      <li><a href="https://rivkin.com.au">Trading &amp; Performance Policy</a></li>
      <li><a href="https:///rivkin.com.au">Key Concepts</a></li>
      <li><a href="https://rivkin.com.au">Complaints Policy</a></li>
      </ul>
      </nav>
      </div>
      


      <div class="disclaimer">
<p class="extra-small-text color-grey">
<span class="color-orange uppercase">Disclaimer:</span> Rivkin aims to provide clear and simple information...
</p>
<p class="extra-small-text color-grey">
<span class="color-orange uppercase">Trading Performance Disclaimer:</span> Rivkin advise you not to rely solely on back tested...
</p>


</div>


          </div>
        </div>
        </footer>
  );
}

export default Footer;
