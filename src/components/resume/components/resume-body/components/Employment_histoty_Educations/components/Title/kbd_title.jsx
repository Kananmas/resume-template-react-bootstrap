import React from "react";

export default function Title(props) {
  return (
    <div className="my-3">
      <kbd className="h5">{props.title}</kbd>
    </div>
  );
}
