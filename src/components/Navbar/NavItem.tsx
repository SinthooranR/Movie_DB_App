import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { mainSelector } from "../../reduxState/slices/movieSlice";

interface NavItemProps {
  routePath: string;
  routeName: string;
}

function NavItem(props: NavItemProps) {
  const { theme } = useSelector(mainSelector);

  let currentColor;
  switch (theme) {
    case false:
      currentColor = "#00000f";
      break;
    case true:
      currentColor = "#fefefe ";
      break;
    default:
      currentColor = "#00000f";
      break;
  }
  return (
    <NavLink
      to={props.routePath}
      activeStyle={{ borderTop: `1px solid ${currentColor}` }}
    >
      {props.routeName}
    </NavLink>
  );
}

export default NavItem;
