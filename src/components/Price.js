import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Button from '../components/buttons/Button';
import { plans } from '../utils/plansData';
import Fade from 'react-reveal/Fade';

const Price = ({ getPath, getTier, getCompo, isMobile }) => {
  const { pathname } = useLocation();

  // const [current,setCurrent] = useState(0)

  useEffect(() => {
    getPath(pathname);
    getCompo('price', 'white');

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='price'>
      <div className='main'>
        <Fade duration={800} delay={500}>
          <h1 className='fancy'>PRICING</h1>
        </Fade>
        <Fade duration={2000} delay={1000}>
          <p>Choose from three subscription based payment models.</p>
        </Fade>
      </div>

      <div className='plans'>
        {plans.map((plan, index) => (
          <Fade bottom duration={1500} delay={(index + 1) * 90} key={index + 2}>
            <div
              className='plan'
              key={index}
              style={{
                border: `3px solid ${plan.recommended ? plan.color : 'white'}`,
              }}
            >
              {plan.recommended && (
                <p style={{ margin: 'none' }}>MOST POPULAR ✨</p>
              )}
              <h1
                style={{ WebkitTextStroke: `0.04em ${plan.color}` }}
                className='fancy'
              >
                {plan.tier.toUpperCase()}
              </h1>
              <div style={{ borderColor: plan.color }} className='border'></div>
              <h2 style={{ color: plan.color }}>
                {plan.duration.toUpperCase()}
              </h2>
              <h1 style={{ color: plan.color }}>${plan.price}</h1>

              <p>{plan.summary}</p>

              <Link
                to='/checkout'
                onClick={(e) => getTier(`${plan.tier.toLocaleLowerCase()}`)}
              >
                <Button
                  name={'select'}
                  style={{
                    color: plan.color,
                    borderColor: plan.color,
                    margin: '2rem auto 0 auto',
                  }}
                  duration={600}
                />
              </Link>
            </div>
          </Fade>
        ))}
      </div>
    </div>
  );
};

export default Price;
