import React from "react";
import PropTypes from "prop-types";

function DateTime(props) {
  return (
    <p className="small text-muted"><i className="fa fa-clock-o"></i> {props.date}</p>
  );
}

DateTime.propTypes = {
  date: PropTypes.string
}

export default DateTime;
