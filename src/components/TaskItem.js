import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class TaskItem extends Component{
  render() {
    return(
      <div>
       <a href="#" className="list-group-item">
            <span className="badge">{this.props.task.date}</span>
            <i className="fa fa-fw fa-calendar"></i> {this.props.task.task}
        </a>
      </div>

    )
  }
}

TaskItem.propTypes = {
  task: PropTypes.object.isRequired
}