import React from 'react';
import Anime from 'react-anime';

const BoxAnime = (props) => (
  <Anime 
    delay={(e, i) => i * 100}
    scale={[.1, .9]}
    easing='linear'>
    <div style={{backgroundColor: 'blue', width: 100, height: 100}}/>
    <div style={{backgroundColor: 'green', width: 100, height: 100}}/>
    <div style={{backgroundColor: 'red',  width: 100, height: 100}}/>
  </Anime>
);

export default BoxAnime