import React, { useEffect } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import Hero from './Hero';
import Sound from './Sound';
import FrontRow from './FrontRow';
import Reviews from './Reviews';
import Perks from './Perks';
import { useLocation } from 'react-router-dom';
import '../styles/main.scss';

const Main = ({ getCompo, getPath, isMobile, component }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    getPath(pathname);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getCompo('', 'white');

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='main'>
      <VisibilitySensor
        onChange={(isVisible) => {
          getCompo(isVisible && 'hero', 'white');
        }}
      >
        <Hero />
      </VisibilitySensor>

      <VisibilitySensor
        onChange={(isVisible) => {
          getCompo(isVisible && 'sound', '#D34848');
        }}
      >
        <Sound />
      </VisibilitySensor>

      <VisibilitySensor
        onChange={(isVisible) => {
          getCompo(isVisible && 'frontRow', '#FFB33F');
        }}
        minTopValue={10}
        partialVisibility
      >
        <FrontRow isMobile={isMobile} component={component} />
      </VisibilitySensor>

      <VisibilitySensor
        onChange={(isVisible) => {
          getCompo(isVisible && 'black', 'white');
        }}
      >
        <Perks />
      </VisibilitySensor>

      <VisibilitySensor
        onChange={(isVisible) => {
          getCompo(isVisible && 'review', '#1FE1E9');
        }}
      >
        <Reviews isMobile={isMobile} />
      </VisibilitySensor>
    </div>
  );
};

export default Main;
