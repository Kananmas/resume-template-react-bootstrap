import React from "react";

const style = { fontSize: "16px" };
export default function Date(props) {
  return (
    <div className="my-1">
      <code className="text-dark" style={style}>
        {props.StartingDate}
      </code>
      -
      <code className="text-dark" style={style}>
        {props.EndingDate}
      </code>
    </div>
  );
}
