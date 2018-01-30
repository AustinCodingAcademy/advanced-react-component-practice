import React from "react";
import PropTypes from "prop-types";

function TransactionsRow(props) {
    return (
        <tr>
           <td>{props.order.id}</td>
           <td>{props.order.orderDate}</td>
           <td>{props.order.orderTime}</td>
           <td>{props.order.amount}</td>
        </tr>
    );
}

TransactionsRow.propTypes = {
    order: PropTypes.object
}

export default TransactionsRow;