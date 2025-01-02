import PropTypes from 'prop-types';
import propTypes from 'prop-types';

function List(props){
    // // const fruits = ["apple", "orange", "banana", "coconut", "pineapple"];
    // const fruits = [{id: 1, name: "apple", calories: 95},
    //                 {id: 2, name: "orange", calories: 45},
    //                 {id: 3, name: "banana", calories: 105},
    //                 {id: 4, name: "coconut", calories: 159},
    //                 {id: 5, name: "pineapple", calories: 37}]
                
    // // fruits.sort();
    // // fruits.sort((a, b) => a.name.localeCompare(b.name)) //ALPHABETICAL
    // // fruits.sort((a, b) => b.name.localeCompare(a.name)) //REVERSE ALPHABETICAL
    // // fruits.sort((a, b) => a.calories - b.calories) //NUMERIC
    // fruits.sort((a, b) => b.calories - a.calories) //NUMERIC

    // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
    // const highCalFruits = fruits.filter(fruit => fruit.calories > 100);
    
    // // return(fruits); appleorangebananacoconutpineapple

    // const listItems1 = lowCalFruits.map(lowCalFruit => <li key={lowCalFruit.id}>
    //                                                            {lowCalFruit.name}: &nbsp;
    //                                                            <b>{lowCalFruit.calories}</b></li>);

    // const listItems2 = fruits.map(fruit => <li key={fruit.id}>
    //                                               {fruit.name}: &nbsp;
    //                                               <b>{fruit.calories}</b></li>);
    // const listItems3 = highCalFruits.map(highCalFruit => <li key={highCalFruit.id}>
    //                                               {highCalFruit.name}: &nbsp;
    //                                               <b>{highCalFruit.calories}</b></li>);
    
    // // return(<ul>{listItems}</ul>);
    // return(<ol>{listItems1}</ol>);
    // // return(<ol>{listItems2}</ol>);
    // // return(<ol>{listItems3}</ol>);
    
    const category = props.category;
    const itemList = props.items;
    const listItems = itemList.map(item => <li key={item.id}>
                                                  {item.name}: &nbsp;
                                                  <b>{item.calories}</b></li>);
        
    return(
        <>
            <h3 className="list-cat">{category}</h3>
            <ol className="list-items">{listItems}</ol>
        </>
    );
}

List.defaultProps = {
    category: "Food",
    items: []
}

List.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number,
                                              name: PropTypes.string,
                                              calories: PropTypes.number}))
}

export default List