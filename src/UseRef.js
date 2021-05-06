import React, { useRef, useEffect } from "react";

export const App = () => {
  const textInput = useRef();

  const focusTextInput = () => textInput.current.focus();
  const intervalRef = useRef(0);
  const counter = useRef(0);

  // Since the ref value is updated in the render phase,
  // the value can be incremented more than once
  //use useEffect or useLayoutEffect =>layout phase
  //both act at the end of component life cycle for no side-effect
  //
  useEffect(() => {
    counter.current = counter.current + 1;
  });
  useEffect(() => {
    const id = setInterval(() => {
      console.log("A second has passed");
    }, 1000);

    // We need the interval id to be accessible from the whole component.
    // If we stored the id in a state variable, the component would be re-rendered
    // after the state update so a new interval will be created (this effect is triggered
    // after every re-render) leading us to the infinite loop hell.
    intervalRef.current = id;

    return () => clearInterval(intervalRef.current);
  });
  return (
    <>
      <p>{intervalRef.current}</p>
      <input type="text" ref={textInput} />
      <button onClick={focusTextInput}>Focus the text input</button>
      <h1>{`The component has been re-rendered ${counter.current} times`}</h1>
    </>
  );
};