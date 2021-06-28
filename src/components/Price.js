import React,{useEffect} from 'react';
import {useLocation,Link} from 'react-router-dom'
import Button from '../components/buttons/Button'

const Price = ({getPath,getTier,getCompo,isMobile}) => {
const {pathname} = useLocation()

// const [current,setCurrent] = useState(0)

useEffect(() => {
    getPath(pathname)
    getCompo('price','white')

// eslint-disable-next-line react-hooks/exhaustive-deps
},[])






const plans = [
    {
        tier:'Basic',
        duration:'Monthly',
        price:9.99,
        summary:'SD 720P + 1 device',
        recommended:false,
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
        duration:'Monthly',
        price:12.99,
        summary:'HD 1080P + 3 devices',
        recommended:true,
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
        duration:'Monthly',
        price:15.99,
        summary:'4K UHD + 5 devices',
        recommended:false,
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


// const next = () => {
//     setCurrent(current === plans.length - 1?0:current+1)
// }

// const prev = () => setCurrent(current === 0? plans.length - 1: current -1 )


    return (
        <div className='price'>
            <div className='main'>
                <h1 className='fancy'>PRICING</h1>
                <p>Choose from three subscription based payment models.</p>
            </div>

            {/* {isMobile&&
            <i className="fa fa-arrow-left left-arrow" aria-hidden="true" onClick={e => next()} ></i>
            }
            {
                isMobile&&
                <i className="fa fa-arrow-right right-arrow" aria-hidden="true" onClick={e => prev()}></i>            
            } */}

            <div className='plans'>
                {plans.map((plan,index) => (

                    // isMobile? 
                    
                    //     index===current &&

                    //     (
                    //         <motion.div
                    //          className='plan'
                    //          initial={{opacity:0}}
                    //          animate={{opacity:1}}
                    //          key={index}
                    //          >
                    //             <h1 style={{color:plan.color}}>{plan.tier.toUpperCase()}</h1>
                    //             <div style={{borderColor:plan.color}} className='border'></div>
                    //             <h2 style={{color:plan.color}}>{plan.duration.toUpperCase()}</h2>
                    //             <h1 style={{color:plan.color}}>${plan.price}</h1>
                    //             {plan.features.map((feature,index) => 
                    //             <p key={index}><i className='fa fa-music'/> {feature}</p>
                    //             )}
                    //             <Link to='/checkout'>
                    //             <p style={{backgroundColor:plan.color}} onClick={e => getTier(`${plan.tier.toLocaleLowerCase()}`) } className='planBtn'>SELECT</p>
                    //             </Link>
                    //         </motion.div>
                    //     )
                    
                    // :
                    // if not mobile
                    <div className='plan' key={index}>
                        {plan.recommended && <p>Most popular</p>}
                        <h1 style={{WebkitTextStroke:`0.04em ${plan.color}`}} className='fancy'>{plan.tier.toUpperCase()}</h1>
                        <div style={{borderColor:plan.color}} className='border'></div>
                        <h2 style={{color:plan.color}}>{plan.duration.toUpperCase()}</h2>
                        <h1 style={{color:plan.color}}>${plan.price}</h1>

                        <p>{plan.summary}</p>

                        <Link to ='/checkout' onClick={e => getTier(`${plan.tier.toLocaleLowerCase()}`) } >
                            <Button name={'select'} style={{color:plan.color,borderColor:plan.color,margin:'2rem auto 0 auto'}} />
                        </Link>
                    </div>

                ))}
            </div>
        </div>
    );
}




export default Price;
