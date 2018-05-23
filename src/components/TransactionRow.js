import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class TransactionRow extends Component{
  render(){
    return(
      <tr>
        <td>{this.props.order.id}</td>
        <td>{this.props.order.orderDate}</td>
        <td>{this.props.order.orderTime}</td>
        <td>{this.props.order.amount}</td>
      </tr>
    )
  }
}

TransactionRow.propTypes = {
  order: PropTypes.object.isRequired
}