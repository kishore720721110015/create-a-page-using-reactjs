import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Header from "./header.js";
import Footer from "./footer.js";
import Tab from "./table.js";
import Form from "./login.js";

function BookPage(){
  return(
  <div>
    <Header/>
    <Tab/>
    <Form/>
    <Footer/>
   
  </div>
 );
}
ReactDOM.render(<BookPage/>,document.getElementById("root")); 


