import React, {useState} from 'react';

function ToDo() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event){
        setNewTask(event.target.value);
    }

    function addTask(){

        if(newTask.trim() !== ""){
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }

    }

    function deleteTask(index){
        const updatedTasks = tasks.filter((_, i) => i!== index);
        setTasks(updatedTasks)
    }

    function moveTaskUp(index){
        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index-1]] = [updatedTasks[index-1], updatedTasks[index]]
            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index){
        if(index < tasks.length - 1){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index+1]] = [updatedTasks[index+1], updatedTasks[index]]
            setTasks(updatedTasks);
        }
    }

  return (
    <div className='container'>
      <h1>To-Do-List</h1>  
      <ol>
        {tasks.map((task, index) => 
            <li key={index}>
                <span className='text'>{task}</span>
                <button className='dlt-btn' onClick={() => deleteTask(index)}>✅</button>    
                <button className='up-btn' onClick={() => moveTaskUp(index)}>⬆️</button>    
                <button className='down-btn' onClick={() => moveTaskDown(index)}>⬇️</button>    
            </li>)}
      </ol>

      <div className='in'>
        <input type='text' id='taskInput' placeholder='Enter your task' value={newTask} onChange={handleInputChange}></input>
        <button onClick={addTask} className='add-btn'>Add Task</button>
      </div>      
      
    </div>
  );
}

export default ToDo;
