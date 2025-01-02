//updater function = A function passed as an argument to setState() usually
//                   for e.g. setYear(year+1) -> setYear(updater function){better approach} -> setYear(arrow function)
//                   Allow for safe updates based on the previous state
//                   Used with multiple state updates and asynchronous functions
//                   Good practice to use updater functions   

import Counter from "./Counter"

function App() {
  return(
    <>
      <Counter></Counter>
    </>
  )
}

export default App