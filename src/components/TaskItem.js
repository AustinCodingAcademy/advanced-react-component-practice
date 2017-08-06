import React from "react";
import propTypes from "prop-types";

function TaskItem(props) {
  return (
    <a href="#" className="list-group-item">
      <span className="badge">{props.task.date}</span>
      <i className="fa fa-fw fa-calendar" />
      {props.task.task}
    </a>
  );
}

TaskItem.propTypes = {
  task: propTypes.object.isRequired
};

export default TaskItem;
