import React from "react";
import SkillsandReferences from "./components/SkillandRefrences/skills-and-refrences";
import { EmploymenthistotyEducations } from "./components/EmploymenthistotyandEduncations/Employment_histoty_and_educations";

export function Resumebody(props) {
  return (
    <div className="head">
      <div className="row my-4">
        <div className="body my-2">
          <div className="row">
            <EmploymenthistotyEducations
              educations={props.educations}
              workhistory={props.workhistory}
            />
            <SkillsandReferences refs={props.refs} skills={props.skills} />
          </div>
        </div>
      </div>
    </div>
  );
}
