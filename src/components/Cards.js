import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>

<h3 className='cards-titles'>Top 5 performing stocks since inception</h3>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>

            <CardItem
              src='images/img-stocks1.jpg'
              path='/services'
            />
            <CardItem
              src='images/img-stocks2.jpg'
              path='/services'
            />
            <CardItem
              src='images/img-stocks3.jpg'
              path='/services'
            />
            <CardItem
              src='images/img-stocks4.jpg'
              path='/services'
            />
            <CardItem
              src='images/img-stocks5.jpg'
              path='/services'
            />
          </ul>

      <h3 className='cards-titles'>Latest Updates</h3>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>

            <CardItem
              src='images/img-2b1.jpg'
              text='WPP AUNZ Ltd'
              path='/services'
            />
            <CardItem
              src='images/img-2b1.jpg'
              text='Coca Cola Amatil'
              path='/services'
            />
            <CardItem
              src='images/img-2b1.jpg'
              text='Amaysim Ltd'
              path='/services'
            />
            <CardItem
              src='images/img-2b1.jpg'
              text='Vocus Group'
              path='/services'
            />
            <CardItem
              src='images/img-2b1.jpg'
              text='ASX Event Portfolio'
              path='/services'
            />
            <CardItem
              src='images/img-2b1.jpg'
              text='Cocal Amatil'
              path='/services'
            />
          </ul>

          <h3 className='cards-titles'>About ASX Grouth Portfolio</h3>
          <ul className='cards__items-video'>
             <CardItem
              src='videos/video-3.mp4'
              path='/services'
            />
          </ul>
          <h3 className='cards-titles'>Dividends, IPOs and more</h3>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
}

export default Cards;
