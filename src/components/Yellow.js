import React from 'react';
import video from '../utils/videos/rally.mp4'

const Yellow = ({isMobile}) => {


    return (
        <div className='yellow'>

        <video autoPlay muted loop playsInline id="video">
        <source src={video} type="video/mp4"/>
        </video>

            <div className="content" style={{textAlign:'left'}}>
                    <h1 className='fancy'>FRONT ROW SEATS</h1>
                    <p>Experience rally racing up close and personal.</p>
                    {/* <div className='btn'>
                    <SeeDemo/>
                    </div> */}
            </div>

        </div>
    );
}

export default Yellow;
