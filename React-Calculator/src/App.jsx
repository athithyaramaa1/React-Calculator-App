import { useState } from "react";
import './App.css'

function Calculator() {
  const [state, setState] = useState("");

  let numbval = "";

  const handleClick = (event) => {
    let value = event.target.value;
    numbval = state + value;

    let operators = "+-/*.";

    for (let i = 0; i < numbval.length; i++) {
      if (
        operators.includes(numbval[i]) &&
        operators.includes(numbval[i + 1])
      ) {
        numbval = numbval.slice(0, -1);
      }
    }
    setState(numbval);
  };

  const handleDelete = () => {
    let delbutton = state.slice(0, -1);
    setState(delbutton);
  };

  const calculateResult = () => {
    let result = eval(state);
    setState(result);
  };

  return (
    <div className="wrapper">
      <div className="state">{state}</div>
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
        <button className="button" value="ac" onClick={() => setState("")}>
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
