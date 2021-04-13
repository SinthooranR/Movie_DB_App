import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { mainSelector } from "../../reduxState/slices/movieSlice";

interface NavItemProps {
  routePath: string;
  routeName: string;
}

const NavItem = ({ routePath, routeName }: NavItemProps) => {
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
  }
  return (
    <NavLink
      exact
      to={routePath}
      activeStyle={{ borderTop: `1px solid ${currentColor}` }}
    >
      {routeName}
    </NavLink>
  );
};

export default NavItem;
