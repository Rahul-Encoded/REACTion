import React, {useState, useEffect, useRef} from 'react';

function Stopwatch(){

    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(() => {

        if(isRunning){
            intervalIdRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startTimeRef.current);
            })
        }

        return () => {
            clearInterval(intervalIdRef.current);
        }

    }, [isRunning]);

    function start(){
        setIsRunning(true);
        startTimeRef.current = Date.now() - elapsedTime;
    }

    function stop(){
        setIsRunning(false);
    }
    
    function reset(){
        setElapsedTime(0);
        setIsRunning(false);
        // startTimeRef.current = Date.now();
        // setIsRunning(true);
    }

    function formatTime(){

        let hours = Math.floor(elapsedTime / (1000 * 60 * 60))
        let min = Math.floor(elapsedTime / (1000 * 60) % 60)
        let sec = Math.floor(elapsedTime / (1000) % 60)
        let ms = Math.floor(elapsedTime % (1000))

        // Pad hours, minutes, and seconds with a leading zero if necessary
        hours = String(hours).padStart(2, '0');
        min = String(min).padStart(2, '0');
        sec = String(sec).padStart(2, '0');
        ms = String(ms).padStart(3, '0');

        return `${hours}:${min}:${sec}:${ms}`;
    }

    return(
        <div className='container'>
            <div className='display'>{formatTime()}</div>
            <div className='ctrls'>
                <button className='start-btn' onClick={start}>Start</button>
                <button className='stop-btn' onClick={stop}>Stop</button>
                <button className='reset-btn' onClick={reset}>Reset</button>
                </div>
        </div>

    )
}

export default Stopwatch