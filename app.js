//OLD Practise

import React from "react";
import ReactDOM from "react-dom/client"; 
const parent = React.createElement(
    "div",
    {id : "parent"},
    React.createElement(
        "div",
        {id : "child"},
        React.createElement("h1",{id: "h1"},"HerbalProducts ")
    )
);
const parentArray = React.createElement(
    "div",
    {id : "parent"},
    [React.createElement("div",{id : "child"}),
    
    React.createElement("h1",{id: "h1"},"HerbalProducts Array")
    ]);

//JSX
const heading = React.createElement(
    "h1",
    {id: "heading"},
    "Lets make Skin and Hair beautiful");
console.log(parent);      
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parentArray);