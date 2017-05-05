import React from "react";
import TopNav from "./components/TopNav";
import MessagePreview from "./components/MessagePreview";
import SideNav from "./components/SideNav";
import Comments from "./components/Comments";
import Tasks from "./components/Tasks";
import Orders from "./components/Orders";
import Tickets from "./components/Tickets";
import AreaChart from "./components/AreaChart";
import DonutChart from "./components/DonutChart";
import TransactionsPanel from "./components/TransactionsPanel";
import TransactionRow from "./components/TransactionRow";
import TasksPanel from "./components/TasksPanel";
import TaskItem from "./components/TaskItem";
import PropTypes from "prop-types";
// import Info from ".components/Info";




function App(props) {


  const Info = props;
  const {
  newComments,
  newTasks,
  newOrders,
  tickets,
  orders,
  messages,
  tasks,

  } = Info;

  return (
    <div>
      <div id="wrapper">
        <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
          {/*   <TopNav>   */}
          <TopNav messages={messages}/>
          {/*   </TopNav>   */}


            {/*   <SideNav>   */}
            <SideNav />
            {/*   </SideNav>   */}
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
                                <i className="fa fa-dashboard"></i> Dashboard
                            </li>
                        </ol>
                    </div>
                </div>
                <div className="row">

                   {/*   </Comments>   */}
                    <Comments newComments={newComments} />
                    {/*   </Comments>   */}

                    {/*   <Tasks>   */}
                    <Tasks newTask={newTasks} />
                    {/*   </Tasks>   */}

                    {/*   <Orders>   */}
                    <Orders newOrders={newOrders}/>
                    {/*   </Orders>   */}


                    {/*   <Tickets>   */}
                    <Tickets tickets={tickets}/>
                    {/*   </Tickets>   */}




                </div>

                {/*   <AreaChart>   */}
                <AreaChart />
                {/*   </AreaChart>   */}

                <div className="row">


                    {/*   <DonutChart>   */}
                    <DonutChart />
                    {/*   </DonutChart>   */}


                    <div className="col-lg-4">
                        {/*   <TasksPanel>   */}
                        <TasksPanel />
                        {/*   </TasksPanel>   */}


                    </div>
                    <div className="col-lg-4">


                        {/*   </TransactionsPanel>   */}
                        <TransactionsPanel orders={orders}/>
                        {/*   </TransactionsPanel>   */}

                    </div>
                </div>


            </div>


        </div>


    </div>
    </div>

  );
}


//
// App.propTypes = {
//
//   newComments: Comments,
//   newTasks: newTasks,
//   newOrders: newOrders,
//   tickets: tickets,
//   orders: orders,
//   tasks: tasks,
//   messages: messages
// };

export default App;
