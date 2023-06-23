import { useState, createContext } from "react";
import "./App.css";
import Header from "./components/Header";
import CompA from "./components/CompA";

const AppState = createContext();
const NameContext = createContext();
const App = () => {
  const [data, setData] = useState("Anuraj Ghosh");
  const [name, setName] = useState({
    name: "Ankit",
    age: 31,
    address: "jabalpur",
  });
  return (
    <>
      <AppState.Provider value={{ data }}>
        <NameContext.Provider value={name}>
          <div className="App">
            <Header />
            <br />
            <CompA />
          </div>
        </NameContext.Provider>
      </AppState.Provider>
    </>
  );
};

export default App;
export { AppState, NameContext };
