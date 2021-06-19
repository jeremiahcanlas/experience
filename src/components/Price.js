import React,{useEffect,useState} from 'react';
import {useLocation,Link} from 'react-router-dom'
import { motion } from 'framer-motion';

const Price = ({getPath,getTier,getCompo,isMobile}) => {
const {pathname} = useLocation()

const [current,setCurrent] = useState(0)

useEffect(() => {
    getPath(pathname)

    
    getCompo('price','white')
    

// eslint-disable-next-line react-hooks/exhaustive-deps
},[])




const plans = [
    {
        tier:'Basic',
        duration:'Monthly',
        price:9,
        features:[
            'Very Good',
            'Amazing',
            'Perfect Job',
            'Love this',
            'It\'s so good',
            'Features'
        ],
        color:'#D24848'
    },
    {
        tier:'Advanced',
        duration:'Yearly',
        price:99,
        features:[
            'Very very Good',
            'Even Amazing',
            'Perfect Job',
            'Love this more',
            'It\'s so so good',
            'More Features'
        ],
        color:'#FFB33F'
    },
    {
        tier:'Pro',
        duration:'Yearly',
        price:120,
        features:[
            'Very very Good',
            'Even Amazing',
            'Perfect Job',
            'Love this more',
            'It\'s so so good',
            'More Features'
        ],
        color:'#1FE1E9'
    }
]


const next = () => {
    setCurrent(current === plans.length - 1?0:current+1)
}

const prev = () => setCurrent(current === 0? plans.length - 1: current -1 )


    return (
        <div className='price'>
            <div className='main'>
                <h1>PRICING</h1>
                <p>Test out our app today! Choose from three subscription Based payment models.</p>
            </div>

            {isMobile&&
            <i className="fa fa-arrow-left left-arrow" aria-hidden="true" onClick={e => next()} ></i>
            }
            {
                isMobile&&
                <i className="fa fa-arrow-right right-arrow" aria-hidden="true" onClick={e => prev()}></i>            
            }

            <div className='plans'>
                {plans.map((plan,index) => (

                    isMobile? 
                    
                        index===current &&

                        (
                            <motion.div
                             className='plan'
                             initial={{opacity:0}}
                             animate={{opacity:1}}
                             key={index}
                             >
                                <h1 style={{color:plan.color}}>{plan.tier.toUpperCase()}</h1>
                                <div style={{borderColor:plan.color}} className='border'></div>
                                <h2 style={{color:plan.color}}>{plan.duration.toUpperCase()}</h2>
                                <h1 style={{color:plan.color}}>${plan.price}</h1>
                                {plan.features.map((feature,index) => 
                                <p key={index}><i className='fa fa-music'/> {feature}</p>
                                )}
                                <Link to='/checkout'>
                                <p style={{backgroundColor:plan.color}} onClick={e => getTier(`${plan.tier.toLocaleLowerCase()}`) } className='planBtn'>SELECT</p>
                                </Link>
                            </motion.div>
                        )
                    
                    :
                    // if not mobile
                    <div className='plan' key={index}>
                        <h1 style={{color:plan.color}}>{plan.tier.toUpperCase()}</h1>
                        <div style={{borderColor:plan.color}} className='border'></div>
                        <h2 style={{color:plan.color}}>{plan.duration.toUpperCase()}</h2>
                        <h1 style={{color:plan.color}}>${plan.price}</h1>
                        {plan.features.map((feature,index) => 
                           <p key={index}><i className='fa fa-music'/> {feature}</p>
                        )}
                        <Link to='/checkout'>
                        <p style={{backgroundColor:plan.color}} onClick={e => getTier(`${plan.tier.toLocaleLowerCase()}`) } className='planBtn'>SELECT</p>
                        </Link>
                    </div>

                ))}
            </div>
        </div>
    );
}




export default Price;
