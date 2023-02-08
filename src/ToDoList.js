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

  const deleteTask = (taskName) => {
    const newTodoList = todoList.filter((task)=> {
      // logic with if else
      if(task === taskName) {
        return false;
      }else {
        return true;
      }
      
      // another logic with 1 line return
      // return task !== taskName;
    });
    setTodoList(newTodoList);

    // logic with 1 line
    // setTodoList(todoList.filter((task)=> task !== taskName));
  }

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
              <button onClick={() => deleteTask(task)} className="btnDelete">X</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ToDoList;
