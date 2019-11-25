
import React, {useState} from 'react';
import Anime from 'react-anime';

import './spinner.css'
let Spinner =() => {

    const [play, setPlay] = useState(false)
    return (
        <>
        <Anime 
            loop={true}
            rotate={'+=360deg'}
            easing={'linear'}
            duration={500}
            autoplay={true}
        >
        <div  className='spinner'/>
    </Anime>
     <button onClick={() => {setPlay(!play)}}> Play </button>
   </>
    )

}

export default Spinner