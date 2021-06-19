import React,{useState,useEffect} from 'react';
import { imageData } from '../utils/imageData';
import {motion,AnimatePresence} from 'framer-motion'
import TryItNow from './buttons/TryItNow';


//Image Carousel from scratch
const Hero = () => {

    const length = imageData.length
    const [current,setCurrent] = useState(Math.floor(Math.random() * length))
  

    //use this to automate a carousel
    useEffect(() => {
        const timer = setTimeout(() => {
            current === length -1?setCurrent(0):setCurrent(current+1)
        },10000)

        return () => clearTimeout(timer) //this will unmount the timer and wont mess up the timeout
    },[current,length])


    return (
        <section className='hero-container'>
            
            {
                imageData.map((slide,index)=> 
                
                    <AnimatePresence>
                        {index === current && 
                            (<motion.img
                            src={slide.image} 
                            alt='image' 
                            className='image'
                            initial={{opacity:0}}
                            animate={{opacity:1}}
                            exit={{opacity:0}}
                            transition={{duration:1.5}}
                            />)
                        }
                    </AnimatePresence>
                )
            }

            <div className='main'>
                <h1>INTERACTIVE RALLY EXPERIENCE</h1>
                <p>Experience breathtaking rally like never <br/> before and from the comfort of your own home.</p>
                <TryItNow/>
            </div>
            
        </section>
    );
}

export default Hero;
