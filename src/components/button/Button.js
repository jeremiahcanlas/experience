import React from 'react';
import Fade from 'react-reveal/Fade';

//this takes name and style for the button
// also takes props for react-reveal

const Button = ({ name, style, duration, delay, bottom, left, right, top }) => (
  <Fade
    bottom={bottom}
    left={left}
    right={right}
    top={top}
    duration={duration}
    delay={delay}
  >
    <div className='button' style={style}>
      <p>{name}</p>
    </div>
  </Fade>
);

export default Button;
