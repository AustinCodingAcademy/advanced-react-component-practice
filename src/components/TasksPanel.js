import React from "react";
import TaskItem from "./components/TaskItem";
import {connect} from "react-redux";

function TasksPanel() {
  return (
    <div className="panel panel-default">
        <div className="panel-heading">
            <h3 className="panel-title"><i className="fa fa-clock-o fa-fw"></i> Tasks Panel</h3>
        </div>
        <div className="panel-body">
            <div className="list-group">
                {/*   <TaskItem>    */}
                <TaskItem />
                {/*   </TaskItem>    */}

            </div>
            <div className="text-right">
                <a href="#">View All Activity <i className="fa fa-arrow-circle-right"></i></a>
            </div>
        </div>
    </div>);

}

const mapStateToProps = function (state) {
  return {
    tasks: state.tasks
  };
};
const TasksPanelContainer = connect(mapStateToProps)(TasksPanel);
export default TasksContainerContainer;
