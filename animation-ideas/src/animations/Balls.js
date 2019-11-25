
import React from 'react';
import Anime from 'react-anime';


let Balls =() => (
      <Anime easing="easeOutElastic"
           loop={true}
           duration={1000}
           direction="alternate"
           delay={(el, index) => index * 240}
           translateX='13rem'
           scale={[.75, .9]}>
         <div style={{backgroundColor: 'blue', width: 100, height: 100}}/>
    <div style={{backgroundColor: 'green', width: 100, height: 100}}/>
    <div style={{backgroundColor: 'red',  width: 100, height: 100}}/>
      </Anime>
    );

export default Balls