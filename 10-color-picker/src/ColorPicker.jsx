import React, {useState} from 'react';

function ColorPicker(){
    const [color, setColor] = useState("#FFFFFF");

    function handleColorChange(event){
        setColor(event.target.value);
    }


    return(
        <div className='container' style={{ boxShadow: `0 0 20px ${color}`}}>
            <h1 style={{color: `${color}`,
                        textShadow: `0 0 10px ${color}, 0 0 20px ${color}`}}>Color Picker</h1>
            <div className='color-display' style={{backgroundColor: color,
                                                   boxShadow: `0 0 20px ${color}` 
            }}>
                <p>Selected Color: {color}</p>
            </div>
            <label style={{color: `${color}`,
                           textShadow: `0 0 10px ${color}, 0 0 20px ${color}`}}>Select a color:</label>
            <br></br>
            <input type='color' value={color} onChange={handleColorChange} style = {{boxShadow: `0 0 10px ${color}, 0 0 10px ${color} inset`}}/> 
        </div>
    )
}

export default ColorPicker