import React from "react";
import { SkillList } from "./components/SkillList/skills_list";
import { WorkRefrences } from "./components/WorkRefrences/refrences";

export default function SkillsandReferences(props) {
  return (
    <div className="col-6">
      <SkillList skills={props.skills} />
      <WorkRefrences refs={props.refs} />
    </div>
  );
}
