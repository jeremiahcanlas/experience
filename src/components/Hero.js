import React,{useState,useEffect} from 'react';
// import '../styles/hero.scss'
import { imageData } from '../utils/imageData';
import {motion} from 'framer-motion'
import TryItNow from './buttons/TryItNow';


//Image Carousel from scratch
const Hero = () => {
    const [current,setCurrent] = useState(0)
    const length = imageData.length

    //use this to automate a carousel
    useEffect(() => {
        const timer = setTimeout(() => {
            current === length -1?setCurrent(0):setCurrent(current+1)
        },10000)

        return () => clearTimeout(timer) //this will unmount the timer and wont mess up the timeout
    },[current,length])

    //will render star icons depends on rating
    const circles = (length,current) => {
        let circle = []

        for(let i = 0; i < length; i++){
            circle.push(<i key={i} className='fa fa-circle' onClick={e => setCurrent(i)} style={{color:current === i&&'white'}}/>) 
        }
        
        return circle
    }

    return (
        <section className='hero-container'>
            
            {
                imageData.map((slide,index)=> 
                <div className='active' key={index+1}>
                    <div className='overlay'/>
                    {index === current && 
                    (<motion.img
                     src={slide.image} 
                     alt='image' 
                     className='image'
                     initial={{opacity:0.8}}
                     animate={{opacity:1, scale:1}}
                     transition={{duration:0.6}}
                     />)
                     }
                </div>
                )

            }
            <div className='main'>
                <h1>INTERACTIVE CONCERT EXPERIENCE</h1>
                <p>Experience your favourite artists like never <br/> before and from the comfort of your own home.</p>
                <TryItNow/>
                <div className='img-circles' style={{display:'flex',flexDirection:'row'}}>
                    {circles(length,current)}
               </div>
            </div>
        </section>
    );
}

export default Hero;
