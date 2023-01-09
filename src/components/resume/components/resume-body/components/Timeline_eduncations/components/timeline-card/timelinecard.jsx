import React from "react";

export function Timelinecard(props) {
  return (
    <div className="timeline-card">
      <div className="my-3">
        <kbd className="h5">{props.title}</kbd>
      </div>
      <div className="my-1">
        <code className="text-dark" style={{ fontSize: "16px" }}>
          {props.startingDate}
        </code>
        -
        <code className="text-dark" style={{ fontSize: "16px" }}>
          {props.endingDate}
        </code>
      </div>
      <ul className="list">
        {props.achivements.map((achivement) => {
          return (
            <li key={Math.random().toString(16).slice(2)}>{achivement}</li>
          );
        })}
      </ul>
    </div>
  );
}
