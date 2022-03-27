import React, {Fragment} from 'react';
import Table2 from './Table2';
import PropTypes from 'prop-types';
import './TableHeader.css';

const TableHeader = ({ title }) => {
  return(
    <header className="header">
      <br></br>
      <h2>Welcome to Rivkin ASX Growth Portfolio</h2>
      <br></br>
      <p>ASX Growth is a 14-stock portfolio that combines systematic technical and fundamental analysis for a concentrated portfolio of ASX200 stocks. It combines two of our popular ASX portfolios; ASX Value and ASX Momentum, giving you the benefit of both strategies.</p>
      <br></br>
      <div className='banner-titles-container'>
      <h3 className='header-portfolio'>Portfolio</h3>
        <div className='banner-titles-others'>
          <h3 className='header-others'>Latest Updates</h3>
          <h3 className='header-others'>About</h3>
          <h3 className='header-others'>Performance</h3>
          <h3 className='header-others'>Closed Trades</h3>
      </div>
      </div>
      <p>15th March: following our systematic criteria, the below table show the top seven ASX Momentum and ASX Value stocks based on their respective portfolio criteria. For the month of March, six stocks in total need to be replaced from the portfolio, three from Momentum, and three from Value.</p>
      <Table2 />
      <div className='header-bottom'>
        <div className='header-bottom-title'>
          <h4>Next Rebalance Date</h4>
          <h4>12 Months Return</h4>
          <h4>Positive Closed Trades</h4>
        </div>
        <div className='header-bottom-data'>
          <h3>15 April</h3>
          <h3>8.03%</h3>
          <h3>24</h3>
        </div>
      </div>
    </header>
  
  )}

export default TableHeader;