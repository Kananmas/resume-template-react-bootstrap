import React from "react";

export default function ContactInfo(props){
    return (
        <>
        <h3>{props.name + " " + props.familyname}</h3>
        <div className="text">{props.mail}</div>
        <div className="text">{props.phoneNumber} </div>
        <div className="my-4">{props.address}</div>
        </>
    )
}