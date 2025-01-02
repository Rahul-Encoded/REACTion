import List from "./List"

function App() {
  const fruits = [{id: 1, name: "apple", calories: 95},
                {id: 2, name: "orange", calories: 45},
                {id: 3, name: "banana", calories: 105},
                {id: 4, name: "coconut", calories: 159},
                {id: 5, name: "pineapple", calories: 37}]

  const vegetables = [{id: 6, name: "Potato", calories: 95},
                {id: 7, name: "Carrot", calories: 47},
                {id: 8, name: "Tomato", calories: 65},
                {id: 9, name: "Ladyfinger", calories: 45},
                {id: 10, name: "celery", calories: 37}]

  return(
    <>
      {fruits.length > 0 ? <List items={fruits} category="Fruits"></List> : null}
      {vegetables.length > 0 && <List items={vegetables} category="Vegetables"></List> /*: null*/}
    
    </>
  )
}

export default App
