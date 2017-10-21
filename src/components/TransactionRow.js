import React from "react";
import PropTypes from "prop-types";

function TransactionRow(props) {
  return (
    <tr>
        <td>3326</td>
        <td>10/21/2013</td>
        <td>3:29 PM</td>
        <td>$321.33</td>
    </tr>
  )
}

TransactionRow.proptypes = {
  order: PropTypes.object.isRequired
};

export default TransactionRow;
