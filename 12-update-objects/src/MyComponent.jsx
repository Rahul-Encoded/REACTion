import React, {useState} from 'react';

function MyComponent(){
    const [car, setCar] = useState({year:2024 ,
                                    make:"Ford" ,
                                    model:"Mustang"});

    function handleYearChange(event){
        // setCar({year: 2024, make: "Ford", model: "Mustang", year: event.target.value}) JS doesn't allow Duplicate keys
        setCar(c => ({...c, year: event.target.value}));//JS thinks in case of curly brackets you wish to write a multi-line statement whereas you wish to update your object here, therefore a pair of parenthesis is used here to enclose the object
    }
    
    function handleMakeChange(event){
        setCar(c => ({...c, make: event.target.value}));
        
    }
    
    function handleModelChange(event){
        setCar(c => ({...c, model: event.target.value}));

    }

    return(
        <>
            <p>Your Favourite car is: {car.year} {car.make} {car.model}</p>

            <input type='number' value={car.year} onChange={handleYearChange}></input><br></br>
            <input type='text' value={car.make} onChange={handleMakeChange}></input><br></br>
            <input type='text' value={car.model} onChange={handleModelChange}></input><br></br>
        </>
    )
}

export default MyComponent