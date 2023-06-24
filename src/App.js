import React, { useState, useRef } from "react";
import "./App.css";
import Header from "./components/Header";

const App = () => {
  const [input, setInput] = useState(" ");
  const inputField = useRef();

  const formHandler = (e) => {
    setInput(e.target.value);
  };
  const clickHandler = () => {
    inputField.current.value = "anuraj";
  };

  return (
    <>
      <Header />
      <input ref={inputField} value={input} onChange={formHandler} />

      <button onClick={clickHandler}>Click me</button>
    </>
  );
};

export default App;
