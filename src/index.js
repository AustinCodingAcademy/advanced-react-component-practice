import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import state from "./state";

const {
dateTime,
newComments,
newTasks,
newOrders,
tickets,
orders,
taskItem,
tasks,
messages,
} = state;


console.log(state);
console.log(newComments);
ReactDOM.render(
  <App
    taskItem={taskItem}
    dateTime={dateTime}
    newComments={newComments}
    newTasks={newTasks}
    newOrders={newOrders}
    tickets={tickets}
    orders={orders}
    tasks={tasks}
    messages={messages}
    />,
  document.getElementById("root")
);
