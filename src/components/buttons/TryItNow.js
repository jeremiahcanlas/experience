import React from 'react';
import {motion} from 'framer-motion'
import {Link} from 'react-router-dom'

const TryItNow = () => {


    return (

            <Link to='/price' className='price-btn'>
            <motion.p
                className='btn-mix-noborder' 
                data-text='try it now' 
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{type:'tween', duration:0.5}}
            >
                TRY IT NOW
            </motion.p>   
            </Link>
     
    );
}

export default TryItNow;
