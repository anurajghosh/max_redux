import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Home = () => {
  const [state, setState] = useState(2);
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getData() {
      const get = await fetch(
        ` https://hub.dummyapis.com/employee?noofRecords=${state}&idStarts=1001`
      );
      const res = await get.json();
      setData(res);
    }
    getData();
    document.title = `(${state}) Employees Online`;
  }, [state]);
  return (
    <div className="App">
      <button
        className="btn"
        onClick={() => {
          setState(state + 2);
        }}>
        Click Me {state}
      </button>
      {data.map((element, index) => {
        return (
          <Link to={`/app/${element.id}`}>
            <div className="data" key={index}>
              <h3>{element.firstName}</h3>
              <h3>{element.lastName}</h3>
              <h3>{element.email}</h3>
            </div>
          </Link>
        );
      })}
      
    </div>
  );
};

export default Home;
