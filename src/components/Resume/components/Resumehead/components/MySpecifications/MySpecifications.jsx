import React from "react";
import ContactInfo from "./components/ContactInfo/ContactInfojsx";


export default function MySpecifications(props) {
  return (
    <>
      <div className=" col-2">
        <img
          className="rounded my-2"
          src={props.imgURL}
          alt="my picture"
        />
        <ContactInfo name={props.name} familyName={props.familyName} mail={props.mail} phoneNumber={props.phoneNumber} />
      </div>
    </>
  );
}
