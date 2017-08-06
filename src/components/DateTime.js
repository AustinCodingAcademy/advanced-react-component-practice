import React from "react";
import propTypes from "prop-types";

function DateTime(props) {
  return (
    <p className="small text-muted">
      <i className="fa fa-clock-o" />
      {props.date}
    </p>
  );
}

DateTime.propTypes = {
  date: propTypes.string.isRequired
};

export default DateTime;
