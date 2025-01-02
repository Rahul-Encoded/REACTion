import React, {useState, useEffect} from 'react';

function DigitalClock(){
    
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(t => t = new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        }
    })
    
    function formatTime(){
        let hours = time.getHours();
        let min = time.getMinutes();
        let sec = time.getSeconds();
        const meridiem = hours >= 12 ? "PM" : "AM";

        hours = hours % 12 || 12;

        // Pad hours, minutes, and seconds with a leading zero if necessary
        hours = String(hours).padStart(2, '0');
        min = String(min).padStart(2, '0');
        sec = String(sec).padStart(2, '0');

        return `${hours}: ${min}: ${sec} ${meridiem}`;
    }

    return(
        <div className='container'>
            <div className='clk'>
                <span>{formatTime()}</span>
            </div>

        </div>
    )
}

export default DigitalClock;