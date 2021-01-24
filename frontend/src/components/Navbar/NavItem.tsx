import React from "react";
import { NavLink } from "react-router-dom";

interface NavItemProps{
    routePath: string;
    routeName: string;
}

function NavItem(props: NavItemProps) {
  return <NavLink to={props.routePath}>{props.routeName}</NavLink>;
}

export default NavItem;