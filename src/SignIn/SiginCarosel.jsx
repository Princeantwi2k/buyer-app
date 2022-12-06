import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './signIn.css';
import pic from '../assets/pic1.png';
import pic1 from "../assets/happy1.png";
import pic2 from "../assets/person1.png";

function SiginCarosel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect} className="carousel">
        <Carousel.Item>
          <img
            className="pic"
            src={pic}
            alt="First slide"
          />
          <Carousel.Caption>
            <div className='caroText'>
            <h1>Live Auction</h1>
            <p>Search, bid and buy with the tap of your finger</p>
            </div>
            <p className='visit'>Enter as a visitor </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="pic"
            src={pic2}
            alt="Second slide"
          />
  
          <Carousel.Caption>
          <div className='caroText'>
            <h1>Push notification</h1>
            <p>Receive instant notification for all your bid and watchlist activity</p>
            </div >
            <p className='visit'>Enter as a visitor</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="pic"
            src={pic1}
            alt="Third slide"
          />
  
          <Carousel.Caption>
          <div className='caroText'>
            <h1>Make an Offer</h1>
            <p>
              What are you waiting for, start bidding
            </p>
            </div >
            <p className='visit'>Enter as a visitor</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
}

export default SiginCarosel