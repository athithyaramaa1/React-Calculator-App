import { useState } from "react";
import './App.css'

function Calculator() {
  const [display, setDisplay] = useState("");

  let displayVal = "";

  const handleClick = (event) => {
    let value = event.target.value;
    displayVal = display + value;

    let operators = "+-/*.";

    for (let i = 0; i < displayVal.length; i++) {
      if (
        operators.includes(displayVal[i]) &&
        operators.includes(displayVal[i + 1])
      ) {
        displayVal = displayVal.slice(0, -1);
      }
    }
    setDisplay(displayVal);
  };

  const handleDelete = () => {
    let updatedDisplay = display.slice(0, -1);
    setDisplay(updatedDisplay);
  };

  const calculateResult = () => {
    let result = eval(display).toString();
    setDisplay(result);
  };

  return (
    <div className="wrapper">
      <div className="display">{display}</div>
      <div className="buttons">
        
        <button className="number" value="0" onClick={handleClick}>
          0
        </button>
        <button className="number" value="1" onClick={handleClick}>
          1
        </button>
        <button className="number" value="2" onClick={handleClick}>
          2
        </button>
        <button className="number" value="3" onClick={handleClick}>
          3
        </button>
        <button className="number" value="4" onClick={handleClick}>
          4
        </button>
        <button className="number" value="5" onClick={handleClick}>
          5
        </button>
        <button className="number" value="6" onClick={handleClick}>
          6
        </button>
        <button className="number" value="7" onClick={handleClick}>
          7
        </button>
        <button className="number" value="8" onClick={handleClick}>
          8
        </button>
        <button className="number" value="9" onClick={handleClick}>
          9
        </button>
        
        <button className="operator" value="+" onClick={handleClick}>
          +
        </button>
        <button className="operator" value="." onClick={handleClick}>
          .
        </button>
        <button className="operator" value="*" onClick={handleClick}>
          *
        </button>
        <button className="operator" value="/" onClick={handleClick}>
          /
        </button>
        <button className="equals" value="=" onClick={calculateResult}>
          =
        </button>
        <button className="button" value="ac" onClick={() => setDisplay("")}>
          AC
        </button>
        <button className="button" value="del" onClick={handleDelete}>
          del
        </button>
        
      </div>
    </div>
  );
}

export default Calculator;
