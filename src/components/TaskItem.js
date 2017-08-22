import React from "react";
import PropTypes from "prop-types";

function TaskItem (props) {
  console.log(props);
  return (
    <a href="#" className="list-group-item">
        <span className="badge">{props.List.task}</span>
        <i className="fa fa-fw fa-calendar"></i>  
        {props.List.date}
    </a>
  );
}

TaskItem.propTypes = {
 task: PropTypes.object.isRequired
};

export default TaskItem;
