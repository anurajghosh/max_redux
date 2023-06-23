import React from "react";
import CompB from "./CompB";

const CompA = () => {
  return (
    <div className="compA">
      <div>CompA</div>
      <CompB />
    </div>
  );
};

export default CompA;
