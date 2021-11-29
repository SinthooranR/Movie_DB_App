import React from "react";
import { Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import { mainSelector } from "./reduxState/slices/movieSlice";

import Navbar from "./components/Navbar/Navbar";
import MoviesPage from "./pages/Main_Pages/Movies";
import AboutPage from "./pages/Extra/About";

import classes from "./App.module.scss";

function App() {
  const { theme } = useSelector(mainSelector);

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

  return (
    <React.Fragment>
      <div className={[classes.App, currentTheme].join(" ")}>
        <Navbar />
        <Switch>
          <Route exact path="/" component={MoviesPage} />
          <Route path="/about" component={AboutPage} />
        </Switch>
      </div>
    </React.Fragment>
  );
}

export default App;
