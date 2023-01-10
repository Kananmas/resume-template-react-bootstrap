import React from "react";
import { RefrenceCard } from "./components/Refrencecard/refrence-card-component";
import randomString from "../../../../../../../../utlis/randomString";
import commonStyle from "../../../../../../commonStyle";

export function WorkRefrences(props) {
  return (
    <div className="my-2" style={commonStyle}>
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
