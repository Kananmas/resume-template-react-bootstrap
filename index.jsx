import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./components/app";
import myPic from "./Assets/images/myPicture.jpg";

const dogo = {
  name: "Kanan",
  familyname: "Masajedi",
  email: "kananmasajedi@gmail.com",
  phoneNumber: 09013046019,
  address: "Iran,Tehran,Shahran,Koohsar",
  imgURL: myPic,
  aboutMeText:
    "Hi i am kanan masajedi 23 form tehran,i am a frontend developer,programmer,game developer , i also play electric guitar as hobby, the start of my coding journey was when i played the famous masterpecie of gaming world half-life and I were influenced by sience fiction world and gameplay mechanics of the game so i decided that i have to creat my own video game,there for i start programming at C# language to be able to create my own games at unity game engine in one year i learned unity blender and some protions of adobe affter affects to just to be able to create my drean game, but after one year i understood i was more eager for the coding part of game development than the artistic parts so i start learning html css and javascript alongside working with unity game engine,after another year i attended at the bootcamp of MapsaHR to gain deeper knowledge of front end development and javascript",
  Educations: [
    {
      title:
        "Islamic Azad University of Medical Siecnce Major of applied chemistry",
      datestart: "10/2018",
      dateend: "on going...",
    },
  ],
  workhistory: [
    {
      title: "Freelancing at parscoders",
      startingDate: "04/2020",
      endingDate: "04/2020",
      achivements: [
        "Managed to create a video game with unity for a client based on a specific order",
      ],
    },
    {
      title: "Submission to brackeyes Game jam 2022",
      startingDate: "08/2022",
      endingDate: "08/2022",
      achivements: [
        "Game jam is a event that indie game developers from around the world create their game and submit it to event so the other contenders could play their game and rate them",
        "in 2022 i created my video game called kill the ghosts a game puts player as a lonely man inside a haunted house and he should kill the ghosts to survive game was wave based FPS game and i it was created in two sleeples nights",
        "after the end of the game jam i managed to get the rank 835th from 1018 contenders which i think was very ok for a first try",
      ],
    },
    {
      title: "Attending at Bootcamp of MapsaHR",
      startingDate: "10/2022",
      endingDate: "on going...",
      achivements: [
        "Managed to develop a very solid base on javascript , redux , Sass, and Css",
        "Learning fundementals of programing",
        "Learning some of the moust important design patterns",
        "Creating a custom redux from scratch with a great performance",
        "Creating a custom virtual dom",
      ],
    },
  ],
  refs: [
    {
      title: "Ali Torki mentor of frontend development bootcamp of MapsaHR",
      email: "XXXXX@gmail.com",
      phoneNumber: 1234521,
    },
  ],
  skills: [
    "HTML",
    "CSS",
    "JAVASCRIPT",
    "C#",
    "UNITY",
    "BLENDER",
    "ADOBE AFTER EFFECTS",
    "REDUX",
    "REACT",
    "SASS",
    "BOOTSTRAP",
  ],
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <App
    name={dogo.name}
    familyname={dogo.familyname}
    aboutMeText={dogo.aboutMeText}
    mail={dogo.email}
    phoneNumber={dogo.phoneNumber}
    address={dogo.address}
    imgURL={dogo.imgURL}
    educations={dogo.Educations}
    workhistory={dogo.workhistory}
    skills={dogo.skills}
    refs={dogo.refs}
  />
);
