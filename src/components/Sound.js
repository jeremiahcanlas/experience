import React from 'react';
import image from '../utils/img/speaker-sound-box-pngrepo-com.png'
import Fade from 'react-reveal/Fade';
// import Pulse from 'react-reveal/Pulse';
// import Slide from 'react-reveal/Slide';
// import Bounce from 'react-reveal/Bounce';

const Sound = () => {
    return (
        <div className='sound-container'>

                
            <div className='superior'>
                <Fade left duration={1000} delay={700}>
                    <h1>EXCEPTIONAL SOUND</h1>
                </Fade>
                <Fade duration={2000} delay={1500}>
                    <p>Experience live versions of your <br/> favourite rally team</p>
                </Fade>
            </div>
                
           <Fade cascade duration={1500} delay={600}>
                <div className='speakers'>
                    <img style={{marginBottom:'6rem'}} src={image} alt="png"/>
                    <img style={{marginTop:'6rem'}} src={image} alt="png"/>
                </div>
            </Fade>
        </div>
    );
}

export default Sound;
