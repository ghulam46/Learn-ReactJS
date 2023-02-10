import "./App.css";
import { useState } from "react";
import { Task } from "./Task";

function ToDoList() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (e) => {
    setNewTask(e.target.value);
  };

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
    };
    // const newTodoList = [...todoList, newTask];
    setTodoList([...todoList, task]);
  };

  const deleteTask = (id) => {
    const newTodoList = todoList.filter((task)=> {
      // logic with if else
      if(task.id === id) {
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
        <div className="inputBox">
          <input onChange={handleChange} />
          <button onClick={addTask}>Add Task</button>
        </div>
      </div>
      <div className="list">
        {todoList.map((task) => {
          return <Task taskName={task.taskName} id={task.id} deleteTask={deleteTask} />;
        })}
      </div>
    </div>
  );
}

export default ToDoList;
