import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import './HeroSection.css';

/*import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {TableAssets} from './TableAssets';
import {Latest} from './sections/Latest';
import {About} from './sections/About';
import {Performance} from './sections/Performance';
import {Closedtrades} from './sections/Closedtrades';
import { Button } from './Button';
const holdsData = [];*/

function HeroSection() {

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);


  return (
    <div className='hero-container'>
      <div className='banner-title'>
      <h4>Welcome to Rivkin ASX Growth Portfolio</h4>
      <h5>ASX Group is a 14-stock portfolio that combine...</h5>
      </div>

      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          
        <div class='footer-link-items'>
        <Link to='/tableassets'  onClick={closeMobileMenu}>
        <h4>Portfolio</h4>
        </Link>

        
                  
</div>

      <div class='footer-link-items'>
            <Link to='/'><h4>Latest Updates</h4></Link>
      </div>


      <div className='footer-link-wrapper'>
        <div class='footer-link-items'>
            <Link><h4>About</h4></Link>
            </div>

        
          <div class='footer-link-items'>
            <Link to='/'><h4>Performance</h4></Link>
            </div>

          <div class='footer-link-items'>
            <Link to='/'><h4>Closed Trades</h4></Link>
            </div>

        </div>
      
</div>

</div>      

</div>
  );
}

export default HeroSection;
