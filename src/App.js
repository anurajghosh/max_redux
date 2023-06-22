import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Error from "./components/Error";
import Insta from "./components/Insta";
import Mail from "./components/Mail";
import UserDetails from "./components/UserDetails";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <br />
        <Routes path="/">
          <Route>
            <Route index element={<Home />} />
            <Route path="/app" element={<Home />} />
          </Route>
          {/* for dynamic Route we use (:) path  */}
          <Route path="/app/:userId" element={<UserDetails />}></Route>

          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />}>
            <Route index element={<Insta />} />
            <Route path="insta" element={<Insta />} />
            <Route path="mail" element={<Mail />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
