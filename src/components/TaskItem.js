import React from "react"
import PropTypes from "prop-types";

function TaskItem(props) {
  return (
    <a href="#" className="list-group-item">
        <span className="badge">just now</span>
        <i className="fa fa-fw fa-calendar"></i> {props.task.task}
    </a>
  )
}

TaskItem.proptypes = {
  task: PropTypes.object.isRequired
};

export default TaskItem;
