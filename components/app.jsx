import React from "react";
import Resumeheader from "./resume-head/resume-header";
import { Resumebody } from "./resume-body";

export function App(props) {
  return (
    <>
      <div className="head" style={{ borderBottom: "0.5px solid grey" }}>
        <div className="row my-4">
          <Resumeheader
            name={props.name}
            familyname={props.familyname}
            aboutMeText={props.aboutMeText}
            mail={props.mail}
            phoneNumber={props.phoneNumber}
            address={props.address}
            imgURL={props.imgURL}
          />
        </div>
      </div>
      <Resumebody
        educations={props.educations}
        workhistory={props.workhistory}
        skills={props.skills}
        refs={props.refs}
      />
    </>
  );
}
