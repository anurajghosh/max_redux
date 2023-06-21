import React from "react";
import { NavLink } from "react-router-dom";
const Header = () => {
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "underline",
      color: isActive ? "red" : "white",
      fontSize: "25px",
    };
  };
  return (
    <div className="header">
      <NavLink style={navLinkStyles} to={"/"}>
        Home
      </NavLink>
      <NavLink style={navLinkStyles} to={"/about"}>
        About
      </NavLink>
      <NavLink style={navLinkStyles} to={"/contact"}>
        Contact
      </NavLink>
      <NavLink style={navLinkStyles} to={"*"}>
        Error
      </NavLink>
    </div>
  );
};

export default Header;
