import "./App.css";
import { useState } from "react";

function ToDoList() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (e) => {
    setNewTask(e.target.value);
  };

  const addTask = () => {
    // const newTodoList = [...todoList, newTask];
    setTodoList([...todoList, newTask]); 
  };

  return (
    <div className="App">
      <div className="addTask">
        <input onChange={handleChange} />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="list">
        {todoList.map((task) => {
          return ( 
            <div className="listContent">
              <h1>{task}</h1>
              <button className="btnDelete">X</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ToDoList;
