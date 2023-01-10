import React from "react";
import UnorderdList from "../../../UnorderedList/UnorderedList";

export function SkillList(props) {
  return (
    <div
      className="my-2 skillList"
    >
      <h3>Skills</h3>
      <UnorderdList list={props.skills} />
    </div>
  );
}
