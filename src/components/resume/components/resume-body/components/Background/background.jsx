import React from "react";
import { Timelinecard } from "./components/timeline-card/timelinecard";
import { EducationCard } from "./components/education/educationCard";
import randomString from "../../../../../../utlis/randomString";

export function Background(props) {
  return (
    <>
      <div className="col-6">
        <h2>Employment History</h2>
        {props.workhistory.map((element) => {
          return (
            <Timelinecard
              key={randomString()}
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
              key={randomString()}
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
