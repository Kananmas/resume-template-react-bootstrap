import React from "react";
import Title from "../Title/kbd_title";
import Date from "../../../Date/date";

export function EducationCard(props) {
  return (
    <div className="education-card">
      <Title title={props.educationTitle} />
      <Date
        StartingDate={props.educationStartingDate}
        EndingDate={props.educationEndingDate}
      />
    </div>
  );
}
