import React from 'react';
import image from '../utils/img/speaker-sound-box-pngrepo-com.png'

const Sound = () => {
    return (
        <div className='sound-container'>
            <div className='superior'>
                <h1>EXCEPTIONAL SOUND</h1>
                <p>Experience live versions of your <br/> favourite rally team</p>
            </div>
            <div className='speakers'>
                <img style={{marginBottom:'6rem'}} src={image} alt="png"/>
                <img style={{marginTop:'6rem'}} src={image} alt="png"/>

            </div>
        </div>
    );
}

export default Sound;
