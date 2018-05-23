import React from "react";
import TaskItem from "./TaskItem";
import PropTypes from "prop-types";

function TasksPanel(props) {
  let taskItems = [];
  taskItems = props.tasks.map((t) => {
    return <TaskItem task={t} />;
  });
  return (
    <div className="panel panel-default">
      <div className="panel-heading">
        <h3 className="panel-title"><i className="fa fa-clock-o fa-fw"></i> Tasks Panel</h3>
      </div>
      <div className="panel-body">
        <div className="list-group">
        {taskItems}
          <div className="task-item">
            <TaskItem />
          </div>
        </div>
        <div className="text-right">
          <a href="#">View All Activity <i className="fa fa-arrow-circle-right"></i></a>
        </div>
      </div>
    </div>
  );
}

TasksPanel.propTypes = {
  tasks: PropTypes.array
};

export default TasksPanel;

