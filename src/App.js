import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Employee_data_fetch from "./components/Employee_data_fetch";

const App = () => {
  return (
    <div className="App">
      <Header />
      <br />
      <Employee_data_fetch />
    </div>
  );
};

export default App;
