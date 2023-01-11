import React from "react";
import SkillsandReferences from "./components/SkillandRefrences/skills-and-refrences";
import { Background } from "./components/Background/background";

export function Resumebody(props) {
  return (
    <div className="body my-2">
      <div className="row">
        <Background
          educations={props.educations}
          workhistory={props.workhistory}
        />
        <SkillsandReferences refs={props.refs} skills={props.skills} />
      </div>
    </div>
  );
}
