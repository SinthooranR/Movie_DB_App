import React from "react";
import { Route, Switch } from "react-router-dom";
import {useSelector} from 'react-redux';
import { mainSelector} from "./reduxState/slices/movieSlice";

import Navbar from "./components/Navbar/Navbar";
import IntroPage from "./pages/Extra/Introduction";
import MoviesPage from "./pages/Main_Pages/Movies";
import SearchResultsPage from "./pages/Main_Pages/SearchResults";
import AboutPage from "./pages/Extra/About";

import classes from "./App.module.scss";


function App() {
  
  const {theme} = useSelector(mainSelector);

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
        <Route exact path="/" component={IntroPage} />
        <Route exact path="/about" component={AboutPage} />
        <Route path="/movies" component={MoviesPage} />
        <Route path="/searchResults" component={SearchResultsPage} />
      </Switch>
      </div>
    </React.Fragment>

  );
}

export default App;
