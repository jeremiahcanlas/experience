import React from 'react';
import {motion} from 'framer-motion'

const TryItNow = ({name,style}) => {

    


    return (
      
                <div style={style} className='tryItBtn'>
                <motion.p
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{type:'tween', duration:0.5}}
            >
                {name}
            </motion.p> 
                </div>  
        
      

     
    );
}

export default TryItNow;
