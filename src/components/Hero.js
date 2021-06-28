import React,{useState,useEffect} from 'react';
import { imageData } from '../utils/imageData';
import {motion,AnimatePresence} from 'framer-motion'
import Button from './buttons/Button';
import {Link} from 'react-router-dom'


//Image Carousel from scratch
const Hero = () => {

    const length = imageData.length
    const [current,setCurrent] = useState(Math.floor(Math.random() * length))
  

    //use this to automate a carousel
    useEffect(() => {
        const timer = setTimeout(() => {
            current === length -1?setCurrent(0):setCurrent(current+1)
        },120000)

        return () => clearTimeout(timer) //this will unmount the timer and wont mess up the timeout
    },[current,length])


    return (
        <section className='hero-container'>
                 {
                imageData.map((slide,index)=> 
                
                    <AnimatePresence >
                        {index === current && 
                            (<motion.img
                            key={index*2} 
                            src={slide.image} 
                            alt='image'
                            className='image'
                            initial={{opacity:0}}
                            animate={{opacity:1}}
                            exit={{opacity:0}}
                            transition={{duration:0.7}}
                            />)
                        }
                    </AnimatePresence>
                )
            }

            <div className='main'>

                <motion.h1
                initial={{opacity:0}}
                animate={{opacity:0.8}}
                transition={{duration:4}}
                className='fancy'
                >
                    INTERACTIVE<span className='glow'> RALLY </span>EXPERIENCE
                </motion.h1>
                <motion.p
                initial={{opacity:0}}
                animate={{opacity:0.8}}
                transition={{duration:4}}
                >Experience breathtaking rally like never <br/> before and from the comfort of your own home</motion.p>
                <Link to='/price'>
                    <Button name={'Try It Now'}/>
                </Link>
            </div>
            <motion.div
            initial={{opacity:0,y:-10}}
            animate={{opacity:0.5,y:0}}
            transition={{delay:3,duration:3}}
            
            className='scroll'>
                <p>scroll down for more</p>
                <i className='fa fa-angle-down'aria-hidden="true"></i>

            </motion.div>

        </section>
    );
}

export default Hero;
