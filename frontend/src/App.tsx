import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

import IntroPage from "./pages/Authentication/IntroPage";
import MoviesPage from "./pages/Main_Pages/Movies";
import MovieDetalsPage from './pages/Main_Pages/MovieDetails';
import LoginPage from "./pages/Authentication/Login";
import SignupPage from "./pages/Authentication/Signup";


import './App.css';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={IntroPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/signup" component={SignupPage} />
        <Route exact path="/movies" component={MoviesPage} />
        <Route exact path="/movieDetails" component={MovieDetalsPage} /> 
      </Switch>
      </React.Fragment>
  );
}

export default App;