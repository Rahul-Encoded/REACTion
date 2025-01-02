import Student from "./Student";

//props = read-only properties that are shared between components.
//        A parebt component can send data to a child component.
//        <Component key=value />


function App(){
  return(
    <>
      <Student name="Rahul" age={21} isStudent={true}></Student>
      <Student name="Dev" age={22} isStudent={false}></Student>
      <Student name="Vishwa" age={22} isStudent={true}></Student>
      <Student name="Preeti" age={23} isStudent={false}></Student>
      <Student name="Sunny"></Student>
    </>
  );
}

export default App