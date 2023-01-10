import React from "react";
import randomString from "../../../../../../utlis/randomString";

export default function UnorderedList(props) {
  return (
    <ul>
      {props.list.map((item) => {
        return <li key={randomString()}>{item}</li>;
      })}
    </ul>
  );
}
