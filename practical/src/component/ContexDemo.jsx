import React, { createContext } from "react";
const MyContext =createContext();
function NestedChild() {
  const data = useContext(MyContext); 
  return (
    <div>
      <h3>Nested Child Component</h3>
      <p>this is the sata received from the context </p>
    </div>
  );
}
function ChildComponent(){
    const data = useconntext(NestedChild);
    return(
        <div>
            <h4>nested inn nested child component</h4>
        </div>
    );
}
function Parent(){
    return(
        <h1>this is the parent element</h1>
    )
}
