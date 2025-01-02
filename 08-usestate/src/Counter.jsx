import React, {useState} from 'react';
function Counter(){

    const [count, setCount] = useState(0);

    const increment = () =>{
        setCount(count+1);
    }
    
    const decrement = () =>{
        setCount(count-1);
    }
    
    const reset = () =>{
        setCount(0);
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