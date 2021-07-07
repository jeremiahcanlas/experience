import React, { useEffect } from 'react';
import video from '../utils/videos/rally.mp4';
import Button from './button/Button';
import Fade from 'react-reveal/Fade';
// import Pulse from 'react-reveal/Pulse';
// import Slide from 'react-reveal/Slide';
// import Bounce from 'react-reveal/Bounce';

const FrontRow = ({ component: { compo } }) => {
  useEffect(() => {
    const vid = document.getElementById('video');

    vid.currentTime = 0;

    compo === 'frontRow' ? vid.play() : vid.pause();
  }, [compo]);

  return (
    <div className='frontRow'>
      <video
        // style={
        //   compo === 'frontRow' ? { display: 'visible' } : { display: 'hidden' }
        // }
        muted
        loop
        playsInline
        id='video'
      >
        <source src={video} type='video/mp4' />
      </video>

      <div className='content' style={{ textAlign: 'left' }}>
        <Fade left duration={1000} delay={500}>
          <h1 className='fancy'>FRONT ROW SEATS</h1>
        </Fade>
        <Fade duration={2000} delay={1200}>
          <p>Experience rally racing up close and personal.</p>
        </Fade>
        <Button name={'try it now'} duration={1000} delay={1500} />
      </div>
    </div>
  );
};

export default FrontRow;
