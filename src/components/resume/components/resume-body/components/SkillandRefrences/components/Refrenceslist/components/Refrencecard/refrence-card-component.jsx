import React from "react";

export function RefrenceCard(props) {
  return (
    <div className="refrenced mx-2">
      <h5>{props.title}</h5>
      <p>{props.email}</p>
      <p>{props.phoneNumber}</p>
    </div>
  );
}
