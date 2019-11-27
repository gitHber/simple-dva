import React from "react";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const state = useSelector(
    state => state,
    function(left, right) {
      return left === right;
    }
  );
  const dispatch = useDispatch();
  return (
    <>
      <p>GLobal</p>
      <button onClick={() => dispatch({ type: "global/addEffect" })}>
        add after 1s
      </button>
      <button onClick={() => dispatch({ type: "global/add" })}>
        add
      </button>
      <button onClick={() => dispatch({ type: "global/sub" })}>
        sub
      </button>
      <h1>
        {state.global.count}
      </h1>
      <p>GLobal2</p>
      <button onClick={() => dispatch({ type: "global2/addEffect" })}>
        add after 1s
      </button>
      <button onClick={() => dispatch({ type: "global2/add" })}>
        add
      </button>
      <button onClick={() => dispatch({ type: "global2/sub" })}>
        sub
      </button>
      <h1>
        {state.global2.count}
      </h1>
    </>
  );
}

export default App;
