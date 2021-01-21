import React from "react";
import { NavLink } from "react-router-dom";

function NavItem(props) {
  return <NavLink to={props.routePath}>{props.routeName}</NavLink>;
}

export default NavItem;
