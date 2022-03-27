import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>

<h3>Top 5 performing stocks since inception</h3>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-stocks1.jpg'
              text='Lorem impsum'
              path='/services'
            />
            <CardItem
              src='images/img-stocks2.jpg'
              text='Lorem ipsum'
              path='/services'
            />
            <CardItem
              src='images/img-stocks3.jpg'
              text='Lorem ipsum'
              path='/services'
            />
            <CardItem
              src='images/img-stocks4.jpg'
              text='Lorem ipsum'
              path='/services'
            />
            <CardItem
              src='images/img-stocks5.jpg'
              text='Lorem ipsum'
              path='/services'
            />
          </ul>



      <h3>Latest Updates</h3>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-2b1.jpg'
              text='Lorem impsum'
              label='Lorem 1'
              path='/services'
            />
            <CardItem
              src='images/img-2b1.jpg'
              text='Lorem ipsum'
              label='Lorem 2'
              path='/services'
            />
            <CardItem
              src='images/img-2b1.jpg'
              text='Lorem ipsum'
              label='Lorem 3'
              path='/services'
            />
            <CardItem
              src='images/img-2b1.jpg'
              text='Lorem ipsum'
              label='Lorem 4'
              path='/services'
            />
            <CardItem
              src='images/img-2b1.jpg'
              text='Lorem ipsum'
              label='Lorem 5'
              path='/services'
            />
          </ul>

          <h3>About ASX Grouth Portfolio</h3>
          <ul className='cards__items'>
             <CardItem
              src='images/img-8b1.jpg'
              text='Lorem ipsum'
              label='Lorem 4'
              path='/services'
            />
          </ul>
          <h3>Dividends, IPOs and more</h3>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
}

export default Cards;
