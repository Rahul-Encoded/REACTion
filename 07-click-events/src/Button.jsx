

function Button(){

    // const handleClick = () => console.log("OUCH!"); 
    
    // const handleClick2 = (name) => console.log(`${name} STOP CLICKING ME!!!`);

    // let count = 0;
    
    // const handleClick2 = (name) => {
    //         if(count < 3){
    //         count++;
    //         console.log(`${name} you clicked me ${count} time/s`);
    //         }
    //         else{
    //             console.log(`${name} stop clicking me!`);
    //         }

    //     };

    // return(
    //     <button onClick={() => handleClick2("Rahul")}>DO NOT CLICK ME!🥶</button>
    //     //IF I USE A SET OF PARENTHESIS AFTER A CALLBACK I WILL INVOKE IT RIGHT AWAY HENCE WRAPPED IT INTO FUNCTION EXPRESSION OR ARROW FUNCTION
    // )

    // const handleClick = (/*event*/e) => console.log(e); 
    // const handleClick = (e) => e.target.textContent = "OUCH!🤕"; 
    const handleClick = (e) => e.target.textContent = "OUCH!🤕"; 

    // return(<button onClick={(e) => handleClick(e)}>Click me😈</button>);
    // return(<button onDoubleClick={(e) => handleClick(e)}>Click me😈</button>);
    return(<button onDoubleClick={(e) => handleClick(e)}>Click me😈</button>);
}

export default Button