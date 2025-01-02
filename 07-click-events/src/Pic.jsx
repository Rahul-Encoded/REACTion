
function Pic(){
    const imageUrl = 'https://picsum.photos/id/237/200/300';
    // const handleClick = () => console.log("OUCH!🤕");
    const handleClick = (e) => {
        e.preventDefault();
        if(document.getElementById("myImg").style.display === "none"){
            document.getElementById("myImg").style.display = "block";
        }
        else{
            document.getElementById("myImg").style.display = "none";
        }
    }
    // const handleClick2 = (e2) => e2.target.style.display = "block"; NOT WORKING

    return(
        <>
            <img id="myImg" src={imageUrl}></img>
            <button onClick={(e) => handleClick(e)}>Toggle Image</button>
        </>         
    );
}

export default Pic