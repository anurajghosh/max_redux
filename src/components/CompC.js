import React, { useContext } from "react";
import { AppState } from "../App";
import { NameContext } from "../App";
const CompC = () => {
  const addData = useContext(AppState);
  const name = useContext(NameContext);
  return (
    <div className="compC">
      <div>CompC</div>
      <h1>{addData.data}</h1>
      <h1>{name.name}</h1>
      <h1>{name.age}</h1>
      <h1>{name.address}</h1>
    </div>
  );
};

export default CompC;
