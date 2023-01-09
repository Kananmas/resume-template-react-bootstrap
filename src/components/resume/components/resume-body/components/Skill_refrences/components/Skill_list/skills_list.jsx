import React from "react";
import randomString from "../../../../../../../../utlis/random.string.js";

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
          return <li key={randomString()}>{skill}</li>;
        })}
      </ul>
    </div>
  );
}
