/*
Showing how use react-transition-group gives access to post mount and pre unmount calls
Transition components calls FaaC component with a status which we can utilise to do animation. 
As you can see from code, Transition component expects least two props, in and duration. 
in is to tell Transition component when to begin transition. When in is true, 
transition will start with entering status and end with entered after given duration. 
Similarly,  when in is becomes false, status will change to exiting and change to exited 
after duration.

But there is a problem here. Our component is already mounted and at exited state because 
initially in prop was false. Transition component also accept two more props without a value.
 mountOnEnter prop tells Transition component to mount the component only when status changed 
 to entering or in changes to true. unmountOnExit
 prop tells Transition component to unmount the component when status changes to exited.
 Transition component also call the callback functions when a state changes 
 if they mentioned as props. These are onEnter, onEntering, onEntered, onExit, 
 onExiting and onExited. You can read more about them here. There are are other configurations
  as well to the Transition component like different durations for entering and exiting stages.
   You can read about all this at official documentation.

*/

import React, {useEffect, useState}  from 'react';
import { Transition, TransitionGroup } from 'react-transition-group';

const duration = 2000

const RTG = () => {

    const [ status, setStatus ] = useState(false)
    useEffect(()=> {

        const inTimeout = setTimeout(() => {
           setStatus(true)
        }, 2000);

        const outTimeout = setTimeout(() => {
            this.setstatus(false)
        }, 6000); 

        return () => {
            clearInterval(inTimeout)
            clearIntercal(outTimeout)
        }
    }, [])
        return (
            <TransitionGroup>
            {
                this.state.data.map( num => (
                    <Transition 
                    key={ num }
                    timeout={ 500 }
                    appear={ true }
                    mountOnEnter
                    unmountOnExit
                    >
                        {
                            ( status ) => {
                                return <h5 
                                className={ 'fade-transition fade-' + status }
                                >{status}</h5>;
                            }
                        }
                    </Transition>
                ) )
            }
        </TransitionGroup>
        );
}

export default RTG