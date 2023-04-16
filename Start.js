import React from "react";
import ReactDOM from "react-dom/client"; 

// const heading = React.createElement("h1", {id: "heading"}, "Herbs");

//JSX React - HTML like syntax
const list1 = <span>Herbs list</span>;
const JsxHeading =() => (
<h1  className="heading">
    {list1}
   
    Namaste Herbs
</h1>);


const name = "Nikki";
const HeadingComp = ()=>(
<div>
    <JsxHeading />
    {JsxHeading() }

    {name}
     <h2>Namaste Herbs Func components</h2>

</div>
);
//console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComp />)