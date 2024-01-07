import React from "react";
import  ReactDOM  from "react-dom/client";

//React.createElement ==> React Element- JS Object ==>HTMLElement(Render)
//const heading =React.createElement("h1",{id:"heading"},"Namste React");
//JSX -is not HTML in js. it is html like syntax/XML like syntax
//JSX ==>React.createElement ==> React Element- JS Object ==>HTMLElement(Render)
//Babel convert JSX code to React.createElement 

const Title =()=>(
    <h1 id="heading" tabIndex="5">
        Namaste React from JSX
    </h1>
  )

//functional component
//Component compositions
const HeadingComponent = () => (
  <div id="container">
   { Title()}
   <Title/>
   <Title></Title>
    <h1>Namste React From Functional component</h1>
    </div>
)
 
const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);