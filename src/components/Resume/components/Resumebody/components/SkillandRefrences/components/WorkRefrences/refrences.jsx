import React from "react";
import { RefrenceCard } from "./components/Refrencecard/refrence-card";
import randomString from "../../../../../../../../utlis/random.string.js";

export function WorkRefrences(props) {
  return (
    <div
      className="my-2"
      style={{
        borderRadius: "8px",
        backgroundColor: "gainsboro",
        padding: "8px",
      }}
    >
      <h3>Refrences</h3>
      {props.refs.map((ref) => {
        return (
          <RefrenceCard
            key={randomString()}
            title={ref.title}
            phoneNumber={ref.phoneNumber}
            email={ref.email}
          />
        );
      })}
    </div>
  );
}
