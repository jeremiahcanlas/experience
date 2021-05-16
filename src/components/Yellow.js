import React,{useState} from 'react';
import '../styles/yellow.scss'
import {motion} from 'framer-motion'
import SeeDemo from './buttons/SeeDemo'

const Yellow = () => {

const [values,setValues] = useState('');

    return (
        <div className='yellow'
        onMouseMove={e => {
            let x = e.clientX
            let y = e.clientY
            setValues({
                x,
                y
            }) }}
            onMouseLeave={e => {
                setValues('')
            }}
        >
            <div className="content" style={{textAlign:'left'}}>
                    <h1>FRONT ROW SEATS</h1>
                    <p>Experience concerts up close <br/> and personal.</p>
                    <div className='btn'>
                    <SeeDemo/>
                    </div>
            </div>
            <div className="cover" >
                {/* <div className="circle"></div> */}
                <svg height='100vh' width='100%'>
                    <mask id="circles" maskContentUnits="userSpaceOnUse">
                        <rect x="0" y="0" width="100vw" height="100%" fill="white" />
                        <circle cx='470' cy="200" r="150" fill="black" />
                        <circle cx="350" cy="500" r="220" fill="black" />
                        <circle cx="1350" cy="760" r="180" fill="black" />
                        

                        { values &&
                            <motion.circle 
                            initial={{scale:0}} 
                            animate={{scale:values===''?0:1}}  
                            cx={values.x} 
                            cy={values.y} 
                            r="150" 
                            fill="black" 
                            />
                        }
                        
                    </mask>
                    <g>
                        <rect className='background' x="0" y="0"  fill="#FFB33F" />
                    </g>
                </svg>
            </div>
        </div>
    );
}

export default Yellow;
