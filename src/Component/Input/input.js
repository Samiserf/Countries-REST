import React from 'react';
import './input.css';


function Input(props) {



    return (
        <input onChange={props.changeName} onKeyDown={props.onKeyDown} placeholder="Search for a country"></input>
    );
  }
  
  export default Input;