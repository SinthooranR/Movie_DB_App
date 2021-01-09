import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

import IntroPage from "./pages/Authentication/IntroPage";
import MoviesPage from "./pages/Main_Pages/Movies";
import LoginPage from "./pages/Authentication/Login";
import SignupPage from "./pages/Authentication/Signup";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={IntroPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/signup" component={SignupPage} />
        <Route exact path="/movies" component={MoviesPage} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
