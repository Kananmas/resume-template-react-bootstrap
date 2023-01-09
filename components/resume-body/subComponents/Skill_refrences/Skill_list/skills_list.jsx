import React from "react";

export function SkillList(props) {
  return (
    <div
      className="my-2"
      style={{
        borderRadius: "8px",
        backgroundColor: "gainsboro",
        padding: "8px",
      }}
    >
      <h3>Skills</h3>
      <ul className="list">
        {props.skills.map((skill) => {
          return <li key={Math.random().toString(16).slice(2)}>{skill}</li>;
        })}
      </ul>
    </div>
  );
}
