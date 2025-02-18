//useContext() = React hook that allows you to share values between multiple levels of components without passing props through each level
/*

PROVIDER CONTENT
1. import {createContext} from 'react;
2. export const MyContext = createContext();
3. <MyContext.Provider value={value}?
    <Child/>
   </MyContext.Provider>

*/
import ComponentA from './ComponentA';
import React from 'react';

function App() {
  

  return (
    <>
      <ComponentA></ComponentA>
    </>
  )
}

export default App;
