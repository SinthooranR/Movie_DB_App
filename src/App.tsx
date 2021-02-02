import React from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

import IntroPage from "./pages/Extra/Introduction";
import MoviesPage from "./pages/Main_Pages/Movies";
import MovieDetalsPage from "./pages/Main_Pages/MovieDetails";
import SearchResultsPage from "./pages/Main_Pages/SearchResults";

import "./App.css";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={IntroPage} />
        <Route path="/movies" component={MoviesPage} />
        <Route path="/searchResults" component={SearchResultsPage} />
        <Route path="/movieDetails" component={MovieDetalsPage} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
