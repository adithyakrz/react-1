import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //counter is variable and setCounter is a function 0 is the initial value
  const [counter, setCounter] = useState(0);

 // let counter = 0; 

function addValue(){
  setCounter(counter +1);
}

//function addValue(){
//  setCounter(counter +1);
//setCounter(counter +1);
//setCounter(counter +1);
//this will not work because it will always add 1 to the initial value 
//react treats it as batches so it will not update the value immediately
//solve this by
// setCounter((prevCounter) => prevCounter + 1);
//}

function removeValue(){
  setCounter(counter -1);
}

  return (
    <>
      <h1>React course {counter}</h1>
      <h2>Counter value: {counter}</h2>
      <button
      onClick={addValue}>Add value</button>{" "}
      <button
      onClick={removeValue}>Remove value</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
