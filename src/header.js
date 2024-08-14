import React from "react";
import "./header.css";

function Header(){
    return(
    <div class="header">
        <h3>Shopy</h3>
        <nav class="hed1">
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About US</a></li>
            <li><a href="#service">Service</a></li>
            <li><a href="products">Products</a></li>
            <li><a href="Contact">Contact</a></li>
        </ul>
        </nav>
    </div>
);
}
export default Header;