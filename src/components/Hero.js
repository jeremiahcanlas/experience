import React, { useState, useEffect } from 'react';
import { imageData } from '../utils/imageData';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './buttons/Button';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
// import Pulse from 'react-reveal/Pulse';
// import Slide from 'react-reveal/Slide';
// import Bounce from 'react-reveal/Bounce';

//Image Carousel from scratch
const Hero = () => {
  const length = imageData.length;
  const [current, setCurrent] = useState(Math.floor(Math.random() * length));

  // use this to automate a carousel
  useEffect(() => {
    const timer = setTimeout(() => {
      current === length - 1 ? setCurrent(0) : setCurrent(current + 1);
    }, 1200000);

    return () => clearTimeout(timer); //this will unmount the timer and wont mess up the timeout
  }, [current, length]);

  return (
    <section className='hero-container'>
      {imageData.map((slide, index) => (
        <AnimatePresence key={index + 2}>
          {index === current && (
            <motion.img
              key={index * 2}
              src={slide.image}
              alt='image'
              className='image'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            />
          )}
        </AnimatePresence>
      ))}

      <div className='main'>
        <Fade bottom delay={500} duration={1000}>
          <h1 className='fancy'>
            INTERACTIVE<span className='glow'> RALLY </span>EXPERIENCE
          </h1>
        </Fade>
        <Fade delay={700} duration={3000}>
          <p>
            Experience breathtaking rally like never <br /> before and from the
            comfort of your own home
          </p>
        </Fade>
        <Link to='/price'>
          <Button name={'Try It Now'} duration={1500} delay={1500} />
        </Link>
      </div>

      <Fade top duration={2000} delay={2000}>
        <div className='scroll'>
          <p>scroll for more info</p>
          <i className='fa fa-angle-down' aria-hidden='true'></i>
        </div>
      </Fade>
    </section>
  );
};

export default Hero;
