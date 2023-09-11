import React, {useState} from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const incrementHandler = () => {
    // setCount((prewCount) => {
    //   let countPlus = prewCount + 1;
    //   return countPlus;
    // });
    setCount((prewCount) => prewCount + 1);
  };
  const decrementHandler = () => {
    setCount(count - 1);
  };
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <div>
        <button className="btn btn-primary" style={{ display: "inline", borderRadius: '20px' }} onClick={incrementHandler}>
          Increment
        </button>
        <h1 style={{ display: "inline", margin: "0px 20px" }}>{count}</h1>
        <button className="btn btn-primary" style={{ display: "inline", borderRadius: '20px' }} onClick={decrementHandler}>
          Decrement
        </button>
      </div>
    </div>
  );
}

export default Counter;
