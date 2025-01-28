import React, { useState } from "react"

function ToDoList(){

    const[tasks,setTasks]=useState(["Eat Breakfast","Take a Shower","Walk the Dog"]);
    const[newTask,setNewTask]=useState("");

    function handleInputChange(e){
        setNewTask(e.target.value);
    }

    function addTask()
    {
        setTasks(t => [...t,newTask])
    }

    function deleteTask(index){

    }

    function moveTaskUp(index){
        
    }

    function moveTaskDown(index){
        
    }

    return(
        <div className="to-do-list">
            <h1>To-Do-List</h1>
        <div>
            <input type="text" id="inputTask"
            placeholder="Enter a Task"
            value={newTask}
            onChange={handleInputChange}/>
            <button className="add-button" onClick={addTask}>Add</button>
        </div>
        <ol>
            {tasks.map((task,index) => 
            <li key={index}>
            <span className="text">{task}</span>
            <button className="delete-button" onClick={()=>deleteTask(index)}>Delete</button>
            <button className="move-button" onClick={()=>moveTaskUp(index)}>MoveUp</button>
            <button className="move-button" onClick={()=>moveTaskDown(index)}>MoveDown</button>
            </li>)}
        </ol>
       

        </div>
    )

}

export default ToDoList