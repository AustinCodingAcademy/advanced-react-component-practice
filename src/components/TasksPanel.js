import React from "react";
import TaskItem from "./TaskItem";
import PropTypes from "prop-types";

function TasksPanel(props) {
  const UberTasks = props.tasks;

  const TaskItemList = UberTasks.map((task, i) => {
    console.log(task);
    return (
      <TaskItem key={i} List={task} />
    );
  });

  return (
  <div className="panel panel-default">
      <div className="panel-heading">
          <h3 className="panel-title"><i className="fa fa-clock-o fa-fw"></i> Tasks Panel</h3>
      </div>
      <div className="panel-body">
          <div className="list-group">
              {/*   <TaskItem>    */}
              {TaskItemList}
              {/*   </TaskItem>    */}

          </div>
          <div className="text-right">
              <a href="#">View All Activity <i className="fa fa-arrow-circle-right"></i></a>
          </div>
      </div>
  </div>
  );
}

TasksPanel.propTypes = {
 tasks: PropTypes.string.isRequired
};

export default TasksPanel;
