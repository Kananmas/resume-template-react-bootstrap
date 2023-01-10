import React from "react";
import Resumeheader from "./components/resume-head/resume-header";
import { Resumebody } from "./components/resume-body";

export function App(props) {
  return (
    <>
      <Resumeheader
        name={props.name}
        familyname={props.familyname}
        aboutMeText={props.aboutMeText}
        mail={props.mail}
        phoneNumber={props.phoneNumber}
        address={props.address}
        imgURL={props.imgURL}
      />

      <Resumebody
        educations={props.educations}
        workhistory={props.workhistory}
        skills={props.skills}
        refs={props.refs}
      />
    </>
  );
}
