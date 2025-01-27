import React, { useState } from "react"

function ToDoList(){

    const[tasks,setTasks]=useState(["Eat Breakfast","Take a Shower","Walk the Dog"]);
    const[newTask,setNewTask]=useState("");

    function handleInputChange(e){
        setNewTask(e.target.value);
    }

    function addTask(index)
    {

    }

    function deleteTask(index){

    }

    function moveTaskUp(index){
        
    }

    return(
        <div className="to-do-list">
            <h1>To-Do-List</h1>
        <div>
            <input type="text"
            placeholder="Enter a Task"
            value={newTask}
            onChange={handleInputChange}/>
            <button className="add-button" onClick={addTask}>Add</button>
        </div>
        <ol>
            {tasks.map((task,index) => 
            <li key={index}>
            {task}
            </li>)}
        </ol>
        <button className="delete-button" onClick={()=>deleteTask(index)}>Delete</button>
        <button className="move-button" onClick={()=>moveTaskUp(index)}>Delete</button>

        </div>
    )

}

export default ToDoList