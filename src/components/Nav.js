import React,{useState,useEffect} from 'react';
import {motion} from 'framer-motion'
import {Link} from 'react-router-dom'




const Nav = ({component:{compo,color},path}) => {

    const navItems = [
        {
            item:'What is it',
            path:'/'
        },
        {
            item:'Perks',
            path:'/'
        },
        {
            item:'Pricing',
            path:'/price'
        }
    ]

    const [expand,toggleExpand] = useState(false)

    useEffect(() => {
        toggleExpand(!compo&&false)
    },[compo])

    const list = {
        visible:{display:'block',
        transition:{
            when:'beforeChildren',
            staggerChildren:0.3
        }
    },
        hidden:{display:'none',
        transition:{
            when:'afterChildren',
            staggerChildren:0.05
        }
    }
    }

    const navItem = {
        visible: {opacity:1, x:0},
        hidden: { opacity:0,x:-200}
    }
   
    return (
            
            <div className='nav'>




                    <motion.div 
                    className='hamburger' 
                    onClick={e => toggleExpand(!expand)}
                    transition={{duration:0.2,type:'tween'}}
                    whileHover={{scale:1.1}}
                    >
                        <i className="fa fa-bars" aria-hidden="true"></i>
                    </motion.div>

                   

                    <div className='nav-brand'>
                        <Link to='/'>
                            <motion.span
                                initial={{opacity:0}}
                                animate={{opacity:1}}
                                transition={{duration:1,type:'tween'}}
                            >
                                exp|rally
                            </motion.span>
                        </Link>
                    </div>

                

                <motion.ul
                    className={`dropdown`}
                    variants={list}
                    initial='hidden'
                    animate={expand?'visible':'hidden'}
                >
                    {
                    navItems.map((item,index) => 
                    <motion.li 
                    className='nav-item'
                    variants={navItem}
                    key={index}
                    >
                        <Link to={item.path} onClick={e => toggleExpand(false)}>
                            <motion.span
                            whileHover={color!=='white'&&{color}}
                            key={index}
                            >
                                {item.item.toUpperCase()}
                            </motion.span>
                        </Link>
                    </motion.li>
                        ) 
                    }
                </motion.ul>

                <motion.div 
                    className={`nav-cover`}
                    initial={{scale:0,opacity:0}} 
                    animate={{scale:expand?1:0,opacity:1}}
                    transition={{duration:0.3}}
                    />           
            </div>
        
    );
}

export default Nav;
