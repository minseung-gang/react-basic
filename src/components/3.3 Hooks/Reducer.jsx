import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import { useState, useReducer } from "react";

export default function Reducer() {
  const intialState = { count: 0 };
  function reducer(state, action) {
    switch (action.type) {
      case "reset":
        return intialState;
      case "increment":
        return { count: state.count + 1 };
      case "decrement":
        return { count: state.count - 1 };

      default:
        throw new Error();
    }
  }
  const [state, dispatch] = useReducer(reducer, intialState);
  return (
    <div>
      Count(reducer) : {state.count}
      <button onClick={() => dispatch({ type: "increment" })}>increment</button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
      <button onClick={() => dispatch({ type: "decrement" })}>decrement</button>
    </div>
  );
}
