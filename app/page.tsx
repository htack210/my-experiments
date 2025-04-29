// This is a Next.js page component that renders a simple counter UI.
// It includes two buttons for decrementing and incrementing a counter value, which is displayed in the center of the screen.
// The buttons are styled with Tailwind CSS classes for padding, background color, text color, and rounded corners.
"use client";
import { useState } from "react";

export default function Home() {
  //'count' is a state variable initialized to 4
  // 'setCount' is a function to update the state variable 'count'
  // 'useState' is a React hook that allows you to add state to functional components
  // 'useState' returns an array with two elements: the current state value and a function to update it
  // 'count' is the current state value, and 'setCount' is the function to update it
  // 'useState' takes an initial value as an argument, which is 4 in this case
  // 'count' is a number that represents the current count value
  const [state, setState] = useState({ count: 4, theme: "blue" });
  const count = state.count;
  const theme = state.theme;

  function handleIncrement() {
    // 'setCount' is called with a function that takes the previous count value as an argument
    // and returns the new count value by adding 1 to it
    // This is a functional update, which is useful when the new state depends on the previous state
    // 'prevCount' is the previous count value passed to the function
    // 'setCount' updates the state with the new count value
    // 'prevCount' is a number that represents the previous count value
    setState((prevState) => {
      return { ...prevState, count: prevState.count + 1 };
    });
  }
  function handleDecrement() {
    setState((prevState) => {
      return { ...prevState, count: prevState.count - 1 };
    });
  }

  return (
    <div className="flex gap-4 items-center justify-center min-h-screen">
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded active:bg-blue-700 active:scale-95 transition-transform"
        onClick={handleDecrement}
      >
        -
      </button>
      <span>{count}</span>
      <span>{theme}</span>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded active:bg-blue-700 active:scale-95 transition-transform"
        onClick={handleIncrement}
      >
        +
      </button>
    </div>
  );
}
