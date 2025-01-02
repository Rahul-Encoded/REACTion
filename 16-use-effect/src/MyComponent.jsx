//useEffect() = React hook that tells React DO SOME CODE WHEN (pick one):
//              This component re-renders
//              This component mounts
//              The state of a value
//MORE LIKE useSideCode

//useEffect(function, [dependencies])

//1. useEffect(() => {})         //Runs after every re-render
//2. useEffect(() => {}, [])     //Runs only on mount
//3. useEffect(() => {}, [value])//Runs on mount + when value changes

//USES
// #1 Event Listeners
// #2 DOM Manipulation
// #3 Subscriptions (real-time updates)
// #4 Fetching Data from an API
// #5 Clean up when a component unmounts

import React, {useState, useEffect} from "react";

// function MyComponent() {
//     const [count, setCount] = useState(0);
//     const [color, setColor] = useState("green");

//     //document.title = `Count: ${count}`
//     //Would still update, then why use useEffect?
//     //Code looks more organized  
//     //When exactly the statement executes

//     // useEffect(() => {
//     //     document.title = `Count: ${count}`;
//     // });

//     // useEffect(() => {
//     //     document.title = `My Counter Program's Count: ${count}`;
//     // }, []);

//     // useEffect(() => {
//     //     document.title = `My Counter Program's Count: ${count} ${color}`;
//     // }, [color]);

//     useEffect(() => {
//         document.title = `My Counter Program's Count: ${count} ${color}`;
//     }, [color, count]);

//     function addCount(){
//         setCount(c => c+1);         
//     }
    
//     function subCount(){
//         setCount(c => c-1);         
//     }

//     function changeColor(){
//         setColor(c => (c === "green") ? "red " : "green"); 
//     }

//   return (
//     <div>
//         <p style={{color: `${color}`}}>Count: {count}</p>
//         <button onClick={addCount}>Add</button>
//         <button onClick={subCount}>Subtract</button>
//         <button onClick={changeColor}>Change Color</button>
      
//     </div>
//   );
// }

function MyComponent(){
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    // window.addEventListener("resize", handleResize); USES UP 100s OF EVENT LISTENERS
    // console.log("EVENT LISTENER ADDED");

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        console.log("EVENT LISTENER ADDED");
        
        return () => {
            window.removeEventListener("resize", handleResize);
            console.log("EVENT LISTENER REMOVED");
        }//CLEANUP TO FREE UP USED RESOURCES SO THAT IT DOESN'T LEAD TO UNEXPECTED BEHAVIOUR

    }, []);

    useEffect(() => {
        document.title = `Size: ${width} x ${height}`;
    }, [width, height]);

    function handleResize(){
        setHeight(h => h = window.innerHeight);
        setWidth(w => w = window.innerWidth);
    }

    // function updateWidth(){
    // }

    return(
        <>
            <p>Window Width: {width}px</p>
            <p>Window Height: {height}px</p>
            {/* <button onClick={handleResize}>Update Height</button> */}
            {/* <button onClick={updateWidth}>Update Width</button> */}
        </>
    )
}


export default MyComponent;
