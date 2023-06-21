import "./App.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { inc, dec } from "./states/reducers/index";

function App() {
  const curState = useSelector((state) => state.number);
  const dispatch = useDispatch();
  return (
    <>
      <h1>React Redux Tutorails</h1>
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}>
        <h1>React Redux</h1>
        <h1>{curState}</h1>
        <div>
          <button onClick={() => dispatch(inc(10))}>Increment</button>
          <button onClick={() => dispatch(dec(5))}>Decrement</button>
        </div>
      </div>
    </>
  );
}

export default App;
