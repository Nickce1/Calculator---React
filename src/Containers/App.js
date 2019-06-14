import React, {useState} from 'react';

import Screen from '../Components/Screen/Screen'
import Button from '../Components/Button/Button'
import './App.css'
import '../Components/Button/Button.css'

function App() {
  const [result, setResult] = useState (0)
  const [display, setDisplay] = useState("")
  
  const clicked = event => {
    let val = event.target.innerHTML;
    let ops = ["+", "-", "*", "/"]

    if ( !isNaN(parseInt(val)) || val ==="." || val ==="(" || val === ")" || ops.includes(val)) {
      setDisplay(display + val)
    }
    else if(val === "CE") {
      setResult(0)
      setDisplay("")
    }
    else if(val === "C") {
      setDisplay (display.slice(0, display.length - 1))
    }
    else if( val === "=") {
      try {
        setResult(eval(display))      
      }
      catch(e) {
        setResult("Syntax error")
      }
    }
  }

  return (
    <div className="App">
      {/* <h1>Calculator</h1> */}
      <div className="calculator-body">
        <h5 className="mark">R. fd-3439</h5>
        <Screen
        divDisplay = {display}
        divResult = {result}/>

        <div className="buttons">
          <Button clicked={clicked}/>
        </div>
      </div>
    </div>
  );
}

export default App;
