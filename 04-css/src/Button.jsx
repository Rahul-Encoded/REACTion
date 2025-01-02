// import styles from './Button.module.css'

function Button(){

    // return(
    //     <button className=/*"btn"*/{styles.button}>Click Me</button>
    //     //AVOIDS NAMING CONFLICTS SINCE UNIQUE CLASS IS GOING TO BE GENERATED FOR YOU VIA HASHING ALGORITHMS
    //     //ADDITIONAL EFFORT AND GLOBAL STYLES ARE NOT APPLIED EASILY.
    // )

    //INLINE

    const styles = {
        backgroundColor: "hsl(200, 100%, 50%)",
        color: "aliceblue",
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
    }

    return(<button style={styles}>Click me</button>)

    //CONVENIENT AND EASY TO UNDERSTAND
    //PREVENTS GLOBAL STYLING CONFLICTS
    //GREAT FOR ISOLATED COMPONENTS WITH MINIMAL STYLING
    //LESS MAINTAINAIBLE FOR LARGE PROJECTS

}

export default Button