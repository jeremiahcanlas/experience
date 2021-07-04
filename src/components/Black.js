import React from 'react';
import Fade from 'react-reveal/Fade';
// import Pulse from 'react-reveal/Pulse';
// import Slide from 'react-reveal/Slide';
// import Bounce from 'react-reveal/Bounce';

const Black = ({ footer }) => {
  const perks = [
    {
      title: 'Subscribe Anytime',
      color: '#17BEBB',
      content: 'You can subcscribe anytime, and watch your favourite team!',
    },
    {
      title: 'No Cancellation Fee ',
      color: '#CD5334',
      content: 'Have stress-free cancellation without any hidden fees.',
    },
    {
      title: 'Satisfaction Guranteed',
      color: '#DAFEB7',
      content:
        "If you're not happy, we'll glady give you a refund at full cost!",
    },
  ];

  return (
    <div
      id='allPerks'
      className='black'
      style={{ scrollSnapAlign: footer ? 'none' : 'start' }}
    >
      <div className='black-content'>
        <div className='perks'>
          {perks.map((perk, index) => (
            <Fade
              bottom
              delay={(index + 1) * 90}
              duration={800}
              key={index + 2}
            >
              <div className='perk'>
                <div
                  className='border'
                  style={{ borderColor: `${perk.color}` }}
                ></div>
                <h3 style={{ color: `${perk.color}` }}>{perk.title}</h3>
                <p>{perk.content}</p>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Black;
