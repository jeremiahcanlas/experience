import React,{useEffect} from 'react';
import video from '../utils/videos/rally.mp4'
import TryItNow from './buttons/TryItNow';

const Yellow = ({component:{compo}}) => {
    
    
    useEffect(
        () => {
            const vid = document.getElementById('video');

            vid.currentTime = 0
            compo === 'yellow'? vid.play():vid.pause()
            
        },[compo]
    )

    return (
        <div className='yellow'>

        <video style={compo === 'yellow'?{display:'block'}:{display:'none'}}  muted='muted' loop playsInline id="video">
        <source src={video} type="video/mp4"/>
        </video>

            <div className="content" style={{textAlign:'left'}}>
                    <h1 className='fancy'>FRONT ROW SEATS</h1>
                    <p>Experience rally racing up close and personal.</p>
                    <TryItNow />
            </div>

        </div>
    );
}

export default Yellow;
