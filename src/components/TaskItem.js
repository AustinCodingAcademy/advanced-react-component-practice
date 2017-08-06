import React from "react";
import propTypes from "prop-types";

function TaskItem() {
  return (
    <a href="#" className="list-group-item">
      <span className="badge">just now</span>
      <i className="fa fa-fw fa-calendar" />
      Calendar updated
    </a>
  );
}

TaskItem.propTypes = {
  task: propTypes.object.isRequired
};

export default TaskItem;
