import React from "react";
import "../Styles/TestTwo.css"

const TestTwo = (): JSX.Element => {
  const [count, setCount] = React.useState(0);

  function add() {
    setCount((prevCount) => prevCount + 1);
  }
  function subtract() {
    setCount((prevCount) => prevCount - 1);
  }

  return (
    <div className="counter">
      <button className="counter--minus" onClick={subtract}>
        –
      </button>
      <div className="counter--count">
        <h2 style={{fontSize:"40px"}}>{count}</h2>
      </div>
      <button className="counter--plus" onClick={add}>
        +
      </button>
    </div>
  );
};

export default TestTwo;
