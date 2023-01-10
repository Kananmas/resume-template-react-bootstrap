import React from "react";
import MySpecifications from "./Components/MySpecifications/MySpecifications";
import { AboutMe } from "./Components/Aboutme/aboutme";

export default function Resumeheader(props) {
  return (
    <>
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
    </>
  );
}
