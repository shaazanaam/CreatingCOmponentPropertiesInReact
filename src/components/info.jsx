import React from "react";
import reactDom from "react-dom";

function DetailInfo(props) {
  return (
    <div>
      {" "}
      <p className="info">{props.myinfo}</p>
    </div>
  );
}

export default DetailInfo;
