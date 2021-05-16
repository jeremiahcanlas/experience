import React,{useState,useEffect} from 'react';
import '../styles/hero.scss'
import { imageData } from '../utils/imageData';
import {motion} from 'framer-motion'
import TryItNow from './buttons/TryItNow';
import ReactGlTransitionImage from 'react-gl-transition-image';
import {perlin} from 'gl-transitions'



//Image Carousel from scratch
const Hero = () => {
    const [current,setCurrent] = useState(0)
    const length = imageData.length

    // console.log(current)

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


// const next = () => {
//     setCurrent(current === length - 1?0:current+1)
// }

// const prev = () => setCurrent(current === 0? length - 1: current -1 )


    return (
        <section className='hero-container'>
            
            {/* <i className="fa fa-arrow-left left-arrow" aria-hidden="true" onClick={e => prev()} ></i>
            <i className="fa fa-arrow-right right-arrow" aria-hidden="true" onClick={e => next()}></i>             */}
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
                        // <ReactGlTransitionImage
                        // src={slide.image}
                        // // transition={perlin}
                        // progress={1}
                        // />
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
