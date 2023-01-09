import React from "react";
import { RefrenceCard } from "./refrence-card/refrence-card";

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
            key={Math.random().toString(16).slice(2)}
            title={ref.title}
            phoneNumber={ref.phoneNumber}
            email={ref.email}
          />
        );
      })}
    </div>
  );
}
