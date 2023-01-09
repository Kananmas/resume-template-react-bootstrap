import React from "react";
import { Timelinecard } from "./timeline-card/timelinecard";
import { EducationCard } from "./education/educationCard";

export function EmploymenthistotyEducations(props) {
  return (
    <>
      <div className="col-6">
        <h2>Employment History</h2>
        {props.workhistory.map((element) => {
          return (
            <Timelinecard
              key={Math.random().toString(16).slice(2)}
              title={element.title}
              startingDate={element.startingDate}
              endingDate={element.endingDate}
              achivements={element.achivements}
            />
          );
        })}
        <h2>Education</h2>
        {props.educations.map((education) => {
          return (
            <EducationCard
              key={Math.random().toString(16).slice(2)}
              educationTitle={education.title}
              educationStartingDate={education.datestart}
              educationEndingDate={education.dateend}
            />
          );
        })}
      </div>
    </>
  );
}
