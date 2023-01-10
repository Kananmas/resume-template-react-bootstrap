import React from "react";
import { Resume } from "../components/resume/Resume";

export default function App(props) {
  return (
    <Resume
      name={props.person.name}
      familyname={props.person.familyname}
      aboutMeText={props.person.aboutMeText}
      mail={props.person.email}
      phoneNumber={props.person.phoneNumber}
      address={props.person.address}
      imgURL={props.person.imgURL}
      educations={props.person.Educations}
      workhistory={props.person.workhistory}
      skills={props.person.skills}
      refs={props.person.refs}
    />
  );
}
