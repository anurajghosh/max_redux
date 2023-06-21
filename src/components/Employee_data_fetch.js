import React, { useState, useEffect } from "react";

const Employee_data_fetch = () => {
  const [state, setState] = useState(1);
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
        onClick={() => {
          setState(state + 2);
        }}>
        Click Me {state}
      </button>
      {data.map((element, index) => {
        return (
          <div className="data" key={index}>
            <h3>{element.firstName}</h3>
            <h3>{element.lastName}</h3>
            <h3>{element.email}</h3>
            <h3>{element.contactNumber}</h3>
            <h3>{element.age}</h3>
            <h3>{element.dob}</h3>
            <h3>{element.salary}</h3>
            <h3>{element.address}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default Employee_data_fetch;
