import React from 'react';
import './Banner.css';
import { Button } from './Button';
import { Table } from './Table';
import { Link } from 'react-router-dom';
import { Switch } from 'react-router-dom';

function Banner() {
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
    <div className='banner-container'>
      <div class='banner-links'>
        <div className='banner-link-wrapper'>
        
        <div class='banner-link-items'>
            <h2>Portfolio</h2>
            <Link to='/table'  onClick={closeMobileMenu}>
              
            <>
        <Router>
          <Switch>
        <Route path='/table' component={Table} />
        </Switch>
        </Router>  
        </>
            </Link>

        <section class='table'>
          </section>
    
            </div>

          <div class='banner-link-items'>
            <h2>Latest Updates</h2>
            <Link to='/'>Latest Updates</Link>
          </div>
        
        </div>
        <div className='banner-link-wrapper'>
        <div class='banner-link-items'>
            <h2>About</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
        
          <div class='banner-link-items'>
            <h2>Performance</h2>
            <Link to='/'>Performance</Link>
          </div>

          <div class='banner-link-items'>
            <h2>Closed Trades</h2>
            <Link to='/'>Closed Trades</Link>
          </div>

        </div>
      </div>
    <div>
      <h5>Past performance is not a guarantee to future performance. The event trade portfolio expected return was calculated as an average return from past trades 14/06/2016 to 15/02/2021. Please note that some trades were done purely based on franking credit benefits. To learn more please go to ASX Event Portfolio</h5>
    </div>
    
    </div>
  );
}

export default Banner;