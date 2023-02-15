import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ToDoList from "./ToDoList";
import StateHookCount from "./StateHookCount";
import UseEffect from "./UseEffect/UseEffect";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <ToDoList /> */}
    {/* <StateHookCount /> */}
    <UseEffect />
  </React.StrictMode>
);
