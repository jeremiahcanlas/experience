import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Button from './buttons/Button';

const Payment = ({ tier, getTier, getPath, getCompo }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    getPath(pathname);
    getCompo('checkout', 'white');

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const radio = [
    {
      name: 'basic',
      color: '#D24848',
    },
    {
      name: 'advanced',
      color: '#FFB33F',
    },
    {
      name: 'pro',
      color: '#1FE1E9',
    },
  ];

  return (
    <div className='payment'>
      <div className='payment-form'>
        <h1 className='fancy'>PAYMENT</h1>
        <form action='submit'>
          <div className='tiers'>
            <p>1. Select your plan</p>
            <div className='labels'>
              {radio.map((r) => (
                <label
                  htmlFor={r.name}
                  style={{ color: r.color }}
                  key={radio.indexOf(r)}
                >
                  <i
                    className='fa fa-circle'
                    style={{
                      display: tier === r.name ? 'inline-block' : 'none',
                    }}
                  />
                  <input
                    type='radio'
                    name='plan'
                    style={{
                      display: tier === r.name ? 'none' : 'inline-block',
                    }}
                    value={r.name}
                    id={r.name}
                    onChange={(e) => getTier(e.target.value)}
                    checked={tier === r.name}
                  />
                  {r.name.toUpperCase()}
                </label>
              ))}
            </div>
          </div>

          <div className='credentials'>
            <div
              className='billing'
              style={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <p>2. Billing Information</p>

              <span
                style={{
                  display: 'inline-block',
                }}
              >
                <label htmlFor='name' style={{ display: 'block' }}>
                  FULL NAME
                </label>
                <input type='text' name='name' id='name' />
              </span>

              <span
                style={{
                  display: 'inline-block',
                }}
              >
                <label htmlFor='address' style={{ display: 'block' }}>
                  BILLING ADDRESS
                </label>
                <input type='text' name='address' id='address' />
              </span>

              <div className='split'>
                <span
                  style={{
                    display: 'inline-block',
                  }}
                >
                  <label htmlFor='city' style={{ display: 'block' }}>
                    CITY
                  </label>
                  <input type='text' name='city' id='city' />
                </span>

                <span
                  style={{
                    display: 'inline-block',
                  }}
                >
                  <label htmlFor='postal' style={{ display: 'block' }}>
                    POSTAL CODE
                  </label>
                  <input
                    type='text'
                    name='postal'
                    id='postal'
                    placeholder=' A1A 1A1'
                  />
                </span>
              </div>

              <span
                style={{
                  display: 'inline-block',
                }}
              >
                <label htmlFor='country' style={{ display: 'block' }}>
                  COUNTRY
                </label>
                <input type='text' name='country' id='country' />
              </span>
            </div>

            <div
              className='credit'
              style={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <p>3. Credit Card Information</p>
              <span
                style={{
                  display: 'inline-block',
                }}
              >
                <label htmlFor='card-name' style={{ display: 'block' }}>
                  CARDHOLDER'S NAME
                </label>
                <input type='text' name='card-name' id='card-name' />
              </span>

              <span
                style={{
                  display: 'inline-block',
                }}
              >
                <label htmlFor='card-number' style={{ display: 'block' }}>
                  CARD NUMBER
                </label>
                <input type='text' name='card-number' id='card-number' />
              </span>

              <div className='split'>
                <span
                  style={{
                    display: 'inline-block',
                  }}
                >
                  <label htmlFor='expiry-month' style={{ display: 'block' }}>
                    EXP MONTH
                  </label>
                  <input
                    type='text'
                    name='expiry-month'
                    id='expiry-month'
                    placeholder=' MM/YY'
                  />
                </span>
                <span
                  style={{
                    display: 'inline-block',
                  }}
                >
                  <label htmlFor='expiry-year' style={{ display: 'block' }}>
                    EXP YEAR
                  </label>
                  <input
                    type='text'
                    name='expiry-year'
                    id='expiry-year'
                    placeholder=' MM/YY'
                  />
                </span>
              </div>

              <span
                style={{
                  display: 'inline-block',
                }}
              >
                <label htmlFor='cvv' style={{ display: 'block' }}>
                  CVV
                </label>
                <input type='text' name='cvv' id='cvv' />
              </span>
            </div>
          </div>

          <p className='terms'>
            By continuing, I acknowledge that I’ve read and agree to the{' '}
            <span>Terms of Service</span> & <span>Privacy Policy</span>.
          </p>
          <div className='payment-btn'>
            <Button
              name='Download'
              style={{
                color: 'black',
                border: '1px solid black',
              }}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Payment;
