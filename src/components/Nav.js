import React, { useState, useEffect } from 'react';
import { motion, AnimateSharedLayout } from 'framer-motion';
import { Link } from 'react-router-dom';

//this relies heavy on framer motion.

const Nav = ({ component: { compo, color }, path }) => {
  const navItems = [
    {
      item: 'home',
      path: '/',
    },
    {
      item: 'Perks',
      path: '/perks',
    },
    {
      item: 'Pricing',
      path: '/price',
    },
  ];

  const [expand, toggleExpand] = useState(false);

  useEffect(() => {
    toggleExpand(!compo && false);
  }, [compo]);

  const list = {
    visible: {
      display: 'block',
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.3,
      },
    },
    hidden: {
      display: 'none',
    },
  };

  const navItem = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
    hidden: {
      opacity: 0,
      y: 100,
      transition: {
        duration: 0.3,
      },
    },
  };

  //checkout page exclusive =)
  const navStyle = {
    color: expand ? 'white' : compo === 'checkout' && 'black',
    opacity: 0.8,
  };

  return (
    <div className='nav'>
      <div className='nav-brand'>
        <Link to='/' replace>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1,
              type: 'tween',
            }}
            onClick={(e) => toggleExpand(false)}
            style={navStyle}
          >
            EXP.RALLY
          </motion.span>
        </Link>
      </div>

      <motion.div
        className='hamburger'
        onClick={(e) => toggleExpand(!expand)}
        transition={{
          duration: 0.2,
          type: 'tween',
        }}
        whileHover={{ scale: 1.1 }}
        style={navStyle}
      >
        <i
          className={expand ? 'fa fa-times' : 'fa fa-bars'}
          aria-hidden='true'
        ></i>
      </motion.div>

      <AnimateSharedLayout>
        <motion.div
          className='nav-cover'
          initial={{ width: 0, height: 0 }}
          animate={
            expand
              ? {
                  width: '100vw',
                  height: '100vh',
                }
              : { width: 0, height: 0 }
          }
          onClick={(e) => toggleExpand(!expand)}
          transition={{
            ease: [0.8, 0.5, 0.3, 0.1],
          }}
        >
          <AnimateSharedLayout>
            <motion.ul
              className={`dropdown`}
              variants={list}
              initial='hidden'
              animate={expand ? 'visible' : 'hidden'}
            >
              {navItems.map((item, index) => (
                <motion.li className='nav-item' variants={navItem} key={index}>
                  <Link
                    to={item.path}
                    onClick={(e) => toggleExpand(false)}
                    replace
                  >
                    <motion.span key={index}>
                      {item.item.toUpperCase()}
                    </motion.span>
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </AnimateSharedLayout>
        </motion.div>
      </AnimateSharedLayout>
    </div>
  );
};

export default Nav;
