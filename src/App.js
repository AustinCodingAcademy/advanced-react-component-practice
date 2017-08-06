import React from "react";
import TopNav from "./components/TopNav";
import SideNav from "./components/SideNav";
import Comments from "./components/Comments";
import Tasks from "./components/Tasks";
import Orders from "./components/Orders";
import Tickets from "./components/Tickets";
import AreaChart from "./components/AreaChart";
import DonutChart from "./components/DonutChart";
import TasksPanel from "./components/TasksPanel";
import TransactionsPanel from "./components/TransactionsPanel";
import propTypes from "prop-types";

function App(props) {
  return (
    <div>
      <div id="wrapper">
        <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
          <TopNav messages={props.messages} />
          <SideNav />
        </nav>
        <div id="page-wrapper">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <h1 className="page-header">
                  Dashboard <small>Statistics Overview</small>
                </h1>
                <ol className="breadcrumb">
                  <li className="active">
                    <i className="fa fa-dashboard" /> Dashboard
                  </li>
                </ol>
              </div>
            </div>
            <div className="row">
              <Comments newComments={props.newComments} />
              <Tasks newTasks={props.newTasks} />
              <Orders newOrders={props.newOrders} />
              <Tickets tickets={props.tickets} />
            </div>
            <AreaChart />
            <div className="row">
              <DonutChart />
              <TasksPanel tasks={props.tasks} />
              <TransactionsPanel orders={props.orders} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

App.propTypes = {
  taskItem: propTypes.string,
  dateTime: propTypes.string,
  newComments: propTypes.number,
  newTasks: propTypes.number,
  newOrders: propTypes.number,
  tickets: propTypes.number,
  orders: propTypes.array,
  tasks: propTypes.array,
  messages: propTypes.array
};

export default App;
