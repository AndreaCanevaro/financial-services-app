import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h3>Rivkin Securities</h3>
            <p className='footer-link-items-column1'>Address</p>
            <p className='footer-link-items-column1'>1 Kings Cross Road, Rushcutters Bay, NSW 2011</p>
            <p className='footer-link-items-column2'>Phone</p>
            <p className='footer-link-items-column2'>1 300 748 546 (1300 RIVKIN) </p>
          </div>
          <div class='footer-link-items'>
            <h3>Follow Us</h3>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          
          <div class='footer-link-items'>
            <h3>Explore</h3>
            <Link to='/'>Resources</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <small class='website-rights'>RIVKIN © 2022     Contact      Terms & Conditions     FSG      Privacy Policy      Important Reading      Trading & Performance Policy      Key Concepts</small>
          <div class='social-icons'>
          
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
