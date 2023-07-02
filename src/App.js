import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Inc, Dec } from "./components/states/reducers/index";
import Header from "./components/Header";

const App = () => {
  const curState = useSelector((state) => state.number);
  const dispatch = useDispatch();
  return (
    <div>
      <Header />
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}>
        <h1>{curState}</h1>
        <div>
          <button onClick={() => dispatch(Inc(10))}>Increment</button>
          <button onClick={() => dispatch(Dec(5))}>Decrement</button>
        </div>
      </div>
    </div>
  );
};

export default App;
