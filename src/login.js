import React from "react";
import './login.css';

function Form(){
    return(
        <div class="for">
            <h3>Login</h3>
            <form>
            <label>UserName :</label>
            <input type="text" placeholder="Enter your Username..."></input>
            <label>PassWord :</label>
            <input type="password" placeholder="**********"></input>
            </form>
            <button class="btn1">Submit</button>
            <button class ="btn2">Cancel</button>

        </div>
    );
}
export default Form;