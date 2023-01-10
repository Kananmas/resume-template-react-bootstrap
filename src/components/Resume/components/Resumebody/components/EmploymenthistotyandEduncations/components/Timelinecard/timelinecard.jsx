import React from "react";
import Date from "../Date/Date";
import Title from "../Title/Title";
import UnorderdList from "../../../UnorderedList/UnorderedList";

export function Timelinecard(props) {
  return (
    <div className="timeline-card">
      <Title title={props.title}/>
      <Date educationStartingDate={props.educationStartingDate}  educationEndingDate={props.educationEndingDate}/>
      <UnorderdList list = {props.achivements} />
    </div>
  );
}
