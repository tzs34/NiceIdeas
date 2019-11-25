
import React from 'react';
import Anime from 'react-anime';


let Progress =() => (


    <>
      <Anime 
       easing="easeOutElastic"
       value={100}
       easing= 'linear'
    >
            <progress id="file" max="100" value="0"> </progress>

      </Anime>
    </>
    );

export default Progress