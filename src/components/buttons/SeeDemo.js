import React from 'react';

const SeeDemo = () => {
  return (
    <a
      className='seeDemo'
      href='/'
      onMouseMove={(e) => {
        var xb = e.pageX - e.target.offsetLeft;
        var yb = e.pageY - e.target.offsetTop;

        e.target.style.setProperty('--x', xb + 'px');
        e.target.style.setProperty('--y', yb + 'px');
      }}
    >
      <span>SEE DEMO</span>
    </a>
  );
};

export default SeeDemo;
