import React from "react";
import commonStyle from "../../../../commonStyle";

export function AboutMe(props) {
  return (
    <div className="col-9 offset-1">
      <h1>{props.name}</h1>
      <h2>{props.familyname}</h2>
      <div className="px-3 py-3" style={commonStyle}>
        <h3>Profile</h3>
        {props.aboutMeText}
      </div>
    </div>
  );
}
