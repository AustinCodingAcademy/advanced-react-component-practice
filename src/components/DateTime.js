import React from "react";

export function DateTime(props) {

  console.log(props);

  return <p className="small text-muted"><i className="fa fa-clock-o"></i> {props.date}</p>
}
