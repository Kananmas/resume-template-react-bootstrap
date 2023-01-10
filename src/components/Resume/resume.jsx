import React from "react";
import Resumeheader from "./components/Resumehead/Resumehead";
import { Resumebody } from "./components/Resumebody/Resumebody";

export function Resume(props) {
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
