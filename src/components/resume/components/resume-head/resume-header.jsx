import React from "react";
import MySpecifications from "./components/MySepcifcations/MySpecifications";
import { AboutMe } from "./components/AboutMe/aboutme";

export default function Resumeheader(props) {
  return (
    <>
      <div className="head">
        <div className="row my-4">
          <MySpecifications
            name={props.name}
            familyname={props.familyname}
            mail={props.mail}
            phoneNumber={props.phoneNumber}
            address={props.address}
            imgURL={props.imgURL}
          />
          <AboutMe
            name={props.name}
            familyname={props.familyname}
            aboutMeText={props.aboutMeText}
          />
        </div>
      </div>
    </>
  );
}
