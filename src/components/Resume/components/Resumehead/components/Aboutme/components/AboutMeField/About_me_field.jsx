import React from "react";


export default function AboutMeField(props){
    return (
        <>
             <div
        className="px-3 py-3 AboutMeField"
      >
        <h3>Profile</h3>
        {props.aboutMeText}
      </div>
        </>
    )
}