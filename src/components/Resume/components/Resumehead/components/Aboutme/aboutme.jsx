import React from "react";
import AboutMeField from "./components/AboutMeField/About_me_field";
import AboutMeTitle from "./components/AboutMeTitle/About_Me_Title";

export function AboutMe(props) {
  return (
    <div className="col-9 offset-1">
      <AboutMeTitle name={props.name} familyName={props.familyName}/>
      <AboutMeField aboutMeText={props.aboutMeText}/>
    </div>
  );
}
