import React from "react";
import Date from "../Date/Date";
import Title from "../Title/Title";

export function EducationCard(props) {
  console.log(props.educationTitle);
  return (
    <div className="education-card">
      <Title title={props.educationTitle} />
      <Date educationStartingDate={props.educationStartingDate} educationEndingDate={props.educationEndingDate}/>
    </div>
  );
}
