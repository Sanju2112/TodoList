import React,{useState} from 'react';

function TodoList(){
    const [tasks,setTasks] = useState([]);
    const [newTask,setNewTask] = useState("");
    
    function handleInputChange(event){
        setNewTask(event.target.value);
    }
    function addTask(){
        if(newTask !== ""){
            setTasks(t=>[...t,newTask]);
            setNewTask("");
        }
    }
    function deleteTask(index){
        const updateTasks = tasks.filter((_,i) => i !== index);
        setTasks(updateTasks);
    }
    function moveTaskUp(index){
        if(index > 0){
            const updateTasks = [...tasks];
            [updateTasks[index],updateTasks[index-1]]=[updateTasks[index-1],updateTasks[index]];
            setTasks(updateTasks);
        }
    }
    function moveTaskDown(index){
        if(index < tasks.length - 1){
            const updateTasks = [...tasks];
            [updateTasks[index],updateTasks[index+1]]=[updateTasks[index+1],updateTasks[index]];
            setTasks(updateTasks);
        }
    }

    return(
        <div className='container'>
            <h1>To-Do-List</h1>
            <div>
                <input type='text' placeholder='Enter a task...' value={newTask} onChange={handleInputChange}/>
                <button className='add-btn' onClick={addTask}>Add</button>
            </div>
            <ol>
                {tasks.map((task,index)=>
                 <li key={index}>
                    <span className='text'>{task}</span>
                    <button className='delete-btn' onClick={()=>deleteTask(index)}>Delete</button>
                    <button className='move-btn' onClick={()=>moveTaskUp(index)}>👆</button>
                    <button className='move-btn' onClick={()=>moveTaskDown(index)}>👇</button>
                 </li>)}
            </ol>
        </div>
    );
}
export default TodoList