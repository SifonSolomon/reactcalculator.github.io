import { useState } from "react";
import React from 'react';
import './App.css'

export default function App() {
 // create a constant for calculation
  const [calc, setCalc] = useState("");
  // create a constant for the result
  const [result, setResult] = useState("");
   // create another constant to store your operators
  const ops = ['/', '*', '+', '.'];
  // create a constant to store the minus sign
  const sub = ['-'];

  // create a constant and assign a function to it and pass a value
  const updateCalc = value => {
    // create an if statement to stop an operator from appearing twice and to not appear before a number
    if (
      ops.includes(value) && calc === "" ||
      ops.includes(value) && ops.includes(calc.slice(-1) 
      
      )
    )
{
  return;
}
// create another if statement to stop the minus sign from appearing twice
if ( sub.includes(value) && sub.includes(calc.slice(-1)                                   
))
{
  return;
}
                                          
    // create an instance where when a button is clicked it interacts with the calc
    setCalc(calc + value);
    // update result
    if (!ops.includes(value)) {
      setResult(eval(calc + value).toString())
    }
  }
  // create a function to write out all the numbers from 1 to 9
  const createDigits = () => {
    // set an empty array to store the numbers
    const digits = [];
    // create a for loop to start from 1 to 9
    for (let i = 1; i < 10; i++) {
      // push the new numbers with the push method
      digits.push(
        // create the buttons to be pushed 
        <button
        onClick={() => updateCalc(i.toString())}
        key={i}>
        {i}
      </button>
    )
  }
  return digits;
}
  // create a function to evaluate
const calculate = () => {
  setCalc(eval(calc).toString())
}
  // create a function to delete last
const deleteLast = () => {
  if (calc === "") {
    return
  }
  const value = calc.slice(0, -1);

  setCalc(value)
}
return (
  <div className='App'>
    <div className='calculator'>
      <div className='display'>

        {calc || "0"}
      </div>
      <div className='operators'>
        <button onClick={() => updateCalc("/")}>/</button>
        <button onClick={() => updateCalc("*")}>*</button>
        <button onClick={() => updateCalc("+")}>+</button>
        <button onClick={() => updateCalc("-")}>-</button>

        <button onClick={deleteLast}>CLEAR</button>
      </div>
    
      <div className='digits'>
        {createDigits()}
        <button onClick={() => updateCalc("0")}>0</button>
        <button onClick={() => updateCalc(".")}>.</button>
        <button onClick={calculate}>=</button>
      </div>
    </div>
  </div>
);
}

