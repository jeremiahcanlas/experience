import React,{useState,useEffect} from 'react';
import  SeeDemo from '../components/buttons/SeeDemo'
import {motion} from 'framer-motion'


const useAudio = url => {
    const [audio] = useState(new Audio(url));
    const [playing, setPlaying] = useState(false);

    const toggle = () => setPlaying(!playing);

  useEffect(() => {
      playing ? audio.play() : audio.pause();
    },
    [playing,audio]
  );

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, [audio]);

  return [playing, toggle];
}




const Sound = () => {
    const [values,setValues] = useState('')
    const [playing,toggle]=useAudio('https://res.cloudinary.com/jeremiahcanlas/video/upload/v1617080112/speer/ASAP_Rocky_Peso_mhabg5.mp3')

    
    return (
        <div className='sound-container'>
            <div className='superior'>
                <h1>SUPERIOR SOUND</h1>
                <p>Experience live versions of your <br/> favourite songs</p>
                <SeeDemo/>
            </div>
            <div 
            className='speakers'
            onMouseMove={e => {
                let x = e.pageX
                let y = e.pageY - 70
                setValues({
                    x,
                    y
                })
            }}
            onMouseLeave={e => setValues('')}
            >
                {/* use pathY & pathX to find x and y on the page and render a selector */}
                {values !== '' && (
                    <motion.p
                    style={{
                        position:'absolute',
                        left:values.x,
                        top:values.y,
                        border:'solid 3px black',
                        padding:'2.3rem 1.5rem 1rem 1.5rem',
                        height:'3rem',
                        width:'3rem',
                        borderRadius:'5rem',
                        fontWeight:700
                    }}
                    initial={{scale:0}}
                    animate={{scale:values!==''?1:0}}
                    transition={{type:'spring',stiffness:140, duration:2}}
                    onClick={toggle}
                    >{playing? 'PAUSE':'CLICK'}</motion.p>
                )}
                <img style={{marginBottom:'8rem'}} src="https://res.cloudinary.com/jeremiahcanlas/image/upload/v1616549957/speer/medium17_zayltm.png" alt=""/>
                <img style={{marginTop:'8rem'}} src="https://res.cloudinary.com/jeremiahcanlas/image/upload/v1616549969/speer/medium27_yjsrkv.png" alt=""/>
            </div>
        </div>
    );
}

export default Sound;
