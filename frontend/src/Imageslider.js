import React, { useRef, useState } from 'react';
import './Imageslider.css'; // Import your CSS file
import { Carousel } from 'react-bootstrap';
import { IoIosArrowBack , IoIosArrowForward } from 'react-icons/io'


const Imageslider = ({ images }) => {
  const containerRef = useRef(null);

  const leftscroll = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft -= 180; // Adjust the scroll amount as needed
    }
  };

  const rightscroll = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += 180; // Adjust the scroll amount as needed
    }
  };

  return (
    <div className='image-slider'>
       <button className='button4' onClick={leftscroll}><IoIosArrowBack style={{width:"30px",height:"30px"}}/></button>
    <div className="slider" ref={containerRef}>
            {images.map((item)=>{
                return(
            <img id='carosal' className="d-block w-100" src={item.image} alt="First slide" />
          )
        })}
    </div>
    <button className='button4' onClick={rightscroll}><IoIosArrowForward style={{width:"30px",height:"30px"}}/></button>
    </div>
  );
};

export default Imageslider;
