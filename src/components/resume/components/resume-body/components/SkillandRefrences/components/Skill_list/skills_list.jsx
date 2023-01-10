import React from "react";
import UnorderedList from "../../../UnorderedList/UnorderedList";
import commonStyle from "../../../../../../commonStyle";

export function SkillList(props) {
  return (
    <div className="my-2" style={commonStyle}>
      <h3>Skills</h3>
      <UnorderedList list={props.skills} />
    </div>
  );
}
