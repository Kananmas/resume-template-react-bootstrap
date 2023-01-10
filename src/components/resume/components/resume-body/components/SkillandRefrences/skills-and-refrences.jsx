import React from "react";
import { SkillList } from "./components/Skill_list/skills_list";
import { WorkRefrences } from "./components/Refrenceslist/refrences";

export default function SkillsandReferences(props) {
  return (
    <div className="col-6">
      <SkillList skills={props.skills} />
      <WorkRefrences refs={props.refs} />
    </div>
  );
}
