/*
html, body{
    font-family: -apple-system, sans-serif;
    font-size: 14px;
    font-weight: 300;
    color: #222;
}

.app-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 300px;

    >.buttons{
        margin-top: 10px;
        margin-bottom: 10px;

        >button{
            margin: 5px;
        }
    }

    >.list{
        padding: 0;
        margin: 0;
        list-style-type: none;
        border-radius: 3px;
        overflow: hidden;
        box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
        width: 300px;
    
        >.list-item{
            padding: 10px 15px;
    
            &:not(:last-child){
                border-bottom: 1px solid #ddd;
            }
        }
    }
}
*/
import React, {useState} from 'react';
import { TransitionGroup, Transition } from 'react-transition-group';
import anime from 'animejs';

import './style.scss';
const AnimeRTG = () => {


    const numbers, setNumbers= useState([1,2,3])

    add() {
        setNumbers({
            ...this.state,
            data: this.state.data.concat([ this.state.data.length + 1 ])
        });
    }

    remove() {
        setNumbers({
            ...this.state,
            data: this.state.data.slice(0, -1)
        });
    }

        return (
            <div className="app-container">
                <div className="buttons">
                    <button onClick={ this.add.bind(this) }>Add one</button>
                    <button onClick={ this.remove.bind(this) }>Remove one</button>
                </div>

                <TransitionGroup 
                component="ul"
                className="list"
                >
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
                                        return <li className="list-item">Hey, I am item number <b>{ num }</b></li>;
                                    }
                                }
                            </Transition>
                        ) )
                    }
                </TransitionGroup>
            </div>
        );
    
}

export default AnimeRTG