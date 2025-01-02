import React, {useState} from 'react';
function Counter(){

    const [count, setCount] = useState(0);

    const increment = () =>{
        //Uses the CURRENT state to calculate the NEXT state
        //set functions do not trigger an update.
        //React batches together state updates for performance reasons
        //NEXT state becomes the CURRENT state after an update.
        
        // setCount(count+1);//(0+1)
        // setCount(count+1);//(0+1)
        // setCount(count+1);//(0+1)
        // //UPDATE
        
        setCount(c => c+1);//c represents previous count here
        setCount(c => c+1);
        setCount(c => c+1);
        
        //Uses the PENDING state to calculate the NEXT states
        //React puts your updater function in a queue (waiting in lint)
        //During the next render, it will call them in the same order.
    }
    
    const decrement = () =>{
        setCount(c => c-1);
        setCount(c => c-1);
        setCount(c => c-1);
    }
    
    const reset = () =>{
        setCount(0);
        //An updater function wouldn't be necessary since we are not reliant on the previous state.
        //Still if you wish to see how it'd look:
        //setCount(c => c = 0);
    }

    return(
        <div id='container'>
            <p>{count}</p>
            <div id="btns">
                <button id='dec-btn' onClick={decrement}>Decrease</button>
                <button id='res-btn' onClick={reset}>Reset</button>
                <button id='inc-btn' onClick={increment}>Increase</button>
            </div>
        </div>
    )
}

export default Counter;