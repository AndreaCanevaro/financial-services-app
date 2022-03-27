import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
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
    <>
      <nav className='navbar'>
        <div className='navbar-container'>

          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          <img src="/images/logo-w.png" alt="logo" width="200" />
          </Link>

          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Rivkin 
                <div className='nav-item-second'>Report</div>
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/investmentportfolios'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Investment 
                <div className='nav-item-second'>Portfolios</div>
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/moreservices'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                More 
                <div className='nav-item-second'>Services</div>
              </Link>
            </li>
            <div className='nav-item-third'>
            <li className='nav-item-search'>
              <Link
                to='/search'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Search
              </Link>
            </li>
            </div>

            <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>

            
          </ul>
          {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
