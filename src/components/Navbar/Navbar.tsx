import React from "react";
import NavItem from "./NavItem";
import classes from "./Navbar.module.scss";

function Navbar() {
  return (
    <nav className={classes.Navbar}>
      <ul>
        <NavItem routeName="Movies" routePath="/" />
        <NavItem routeName="About" routePath="/about" />
      </ul>
    </nav>
  );
}

export default Navbar;
