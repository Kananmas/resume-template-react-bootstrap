import React from "react";

export default function Date(props) {
  return (
    <div className="my-1">
      <code className="text-dark" style={{ fontSize: "16px" }}>
        {props.StartingDate}
      </code>
      -
      <code className="text-dark" style={{ fontSize: "16px" }}>
        {props.EndingDate}
      </code>
    </div>
  );
}
