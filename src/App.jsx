import React from "react";
import ReactDOM from "react-dom/client";
import App from "./scripts/main";
import $Kanan from "./utlis/my.info";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App person={$Kanan} />);
