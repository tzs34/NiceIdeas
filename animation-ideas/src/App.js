import React from 'react';
import './App.css';
import {BoxesExample, BlogExample, Balls, Progress, Spinner} from './animations'
function App() {
  return (
    <div className="col">
      <BlogExample />
    <div className='row'>
      <BoxesExample />
    </div>
    <div>
      <Progress />
    </div>
    <Spinner/>
  
    
    </div>
  );
}

export default App;
