import React from "react";
import PropTypes from "prop-types";

function TaskItem(props) {
  return (
    <a href="#" className="list-group-item">
      <span className="badge">{props.task.name}</span>
      <i className="fa fa-fw fa-calendar" />{props.task.date}
    </a>
  );
}

TaskItem.propTypes = {
  task: PropTypes.object
};

export default TaskItem;

