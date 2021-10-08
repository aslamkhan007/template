import React from "react";
import { Link, NavLink } from "react-router-dom";

export function Navigation() {
  return (
    <>
      <h1 style={{position:"sticky",top:"0" , zIndex:"99999",background:"gray"}}>Dashboard</h1>
     
      {/* <ul>
        <li>
          <NavLink to="/register">register</NavLink>
        </li>
        <li>
          <NavLink to="/home">Home</NavLink>
        </li>
      </ul> */}
    </>
  );
}
