import React from "react";

export function EducationCard(props) {
  console.log(props.educationTitle);
  return (
    <div className="education-card">
      <div className="my-3">
        <kbd className="title h5">{props.educationTitle}</kbd>
      </div>
      <div className="my-1">
        <code className="text-dark" style={{ fontSize: "16px" }}>
          {props.educationStartingDate}
        </code>
        -
        <code className="text-dark" style={{ fontSize: "16px" }}>
          {props.educationEndingDate}
        </code>
      </div>
    </div>
  );
}
