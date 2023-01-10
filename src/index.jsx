import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./components/resume/app";
import $kanan from "./utlis/myInfo";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <App
    name={$kanan.name}
    familyname={$kanan.familyname}
    aboutMeText={$kanan.aboutMeText}
    mail={$kanan.email}
    phoneNumber={$kanan.phoneNumber}
    address={$kanan.address}
    imgURL={$kanan.imgURL}
    educations={$kanan.Educations}
    workhistory={$kanan.workhistory}
    skills={$kanan.skills}
    refs={$kanan.refs}
  />
);
