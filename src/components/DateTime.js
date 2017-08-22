import React from "react";
import PropTypes from "prop-types";

function DateTime (props) {
  return (
    <p className="small text-muted"><i className="fa fa-clock-o"></i>
     Yesterday {props.date}
    </p>
  );
}

DateTime.propTypes = {
  date: PropTypes.string.isRequired
};

export default DateTime;
