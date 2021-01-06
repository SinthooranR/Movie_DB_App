import React from "react";
import { Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import MainPage from "./pages/Main/Main";
import CoursePage from "./pages/Courses/Courses";

import LoginPage from "./pages/Authentication/Login";
import SignupPage from "./pages/Authentication/Signup";

import "./App.css";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/myCourses" component={CoursePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={SignupPage} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
