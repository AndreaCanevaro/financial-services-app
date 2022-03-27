import React from 'react';
import PropTypes from 'prop-types';

const TableHeader = ({ title }) => {
  return(
    <header className="header">
      <h2>{title}</h2>
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
    </header>
  );
}

TableHeader.propTypes = {
  title: PropTypes.string.isRequired
}

export default TableHeader;