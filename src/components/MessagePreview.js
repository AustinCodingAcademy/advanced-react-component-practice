import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class MessagePreview extends Component {
    
  render(){
    return(
      <li className="message-preview">
      <a href="#">
          <div className="media">
              <span className="pull-left">
                  <img className="media-object" src="http://placehold.it/50x50" alt="" />
              </span>
              <div className="media-body">
                  <h5 className="media-heading"><strong>{this.props.name}</strong>
                  </h5>
                  {/*  <DateTime>   */}
                  <p className="small text-muted"><i className="fa fa-clock-o"></i> {this.props.date}</p>
                  {/*  </DateTime>   */}
                  <p>{this.props.message}</p>
              </div>
          </div>
      </a>
  </li>
    )
  }
}

MessagePreview.propTypes = {
    message: PropTypes.object.isRequired
}