import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ToDoList from "./ToDoList";
import StateHookCount from "./StateHookCount";
import UseEffect from "./UseEffect/UseEffect";
import FetchApi from "./FetchApi";
import PredictedAgeWithApi from "./PredictedAgeWithApi";
import ExcuserApi from "./ExcuserApi";
import ReactRouter from "./ReactRouterDom/ReactRouter";
import ReactQuery from "./ReactQuery/ReactQuery";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <ToDoList /> */}
    {/* <StateHookCount /> */}
    {/* <UseEffect /> */}
    {/* <FetchApi /> */}
    <ReactQuery />
  </React.StrictMode>
);

const exampleFetchApi = ReactDOM.createRoot(
  document.getElementById("exampleFetchApi")
);
exampleFetchApi
  .render
  // <FetchApi />
  // <PredictedAgeWithApi />
  // <ExcuserApi />
  // <ReactRouter />
  ();
