import React from "react";
import UnorderedList from "../../../UnorderedList/UnorderedList";
import Title from "../Title/kbd_title";
import Date from "../../../Date/date";

export function Timelinecard(props) {
  return (
    <div className="timeline-card">
      <Title title={props.title} />
      <Date StartingDate={props.startingDate} EndingDate={props.endingDate} />
      <UnorderedList list={props.achivements} />
    </div>
  );
}
