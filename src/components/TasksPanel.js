import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TaskItem from "../components/TaskItem"


export default class TaskPanel extends Component{
  render() {
    const getTask = this.props.task.map((taskItem)=>{
        return(
            <TaskItem task={taskItem} />
        )
    })
    return(
      <div className="panel panel-default">
        <div className="panel-heading">
            <h3 className="panel-title"><i className="fa fa-clock-o fa-fw"></i> Tasks Panel</h3>
        </div>
        <div className="panel-body">
            <div className="list-group">
                {getTask}
                
            </div>
            <div className="text-right">
                <a href="#">View All Activity <i className="fa fa-arrow-circle-right"></i></a>
            </div>
        </div>
    </div>
    )
  }
}

TaskPanel.PropTypes = {
    Tasks: PropTypes.array.isRequired
}