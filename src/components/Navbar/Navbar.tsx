import React, { MouseEvent } from "react";
import NavItem from "./NavItem";
import { useSelector, useDispatch } from "react-redux";
import { mainSelector, setTheme } from "../../reduxState/slices/movieSlice";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import NightsStayIcon from "@material-ui/icons/NightsStay";
import classes from "./Navbar.module.scss";

function Navbar() {

  const {theme} = useSelector(mainSelector);
  const dispatch = useDispatch();

  let currentTheme;
  switch (theme) {
    case false:
      currentTheme = classes.Light;
      break;
    case true:
      currentTheme = classes.Dark;
      break;
    default:
      currentTheme = classes.Light;
      break;
  }

  const themeSwitch = (event: MouseEvent<HTMLDivElement>) => {
    dispatch(setTheme(!theme));
    event.preventDefault();
    console.log(theme);
  };


  return (
    <nav className={[classes.Navbar, currentTheme].join(" ")}>
      <ul>
        <NavItem routeName="Movies" routePath="/movies" />
        <NavItem routeName="About" routePath="/about" />
      </ul>
      <div onClick={themeSwitch} className={classes.ThemeIcon}>
        {!theme ? (
          <WbSunnyIcon fontSize="large" />
        ) : (
          <NightsStayIcon fontSize="large" />
        )}
      </div>
    </nav>
  );
}

export default Navbar;
