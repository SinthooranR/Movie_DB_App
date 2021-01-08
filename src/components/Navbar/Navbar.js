import React, { useState } from "react";

import Button from "../Button/Button";
import NavItem from "./NavItem";
import { useHistory } from "react-router-dom";
import Input from "../Input/Input";
import UdemyLogo from "../../assets/udemy.png";

import classes from "./Navbar.module.scss";

function Navbar() {
  const history = useHistory();
  const [search, setSearch] = useState("");

  const toHome = () => {
    history.push("/");
  };

  const toLogin = (event) => {
    history.push("/login");
    event.preventDefault();
  };

  const toRegister = (event) => {
    history.push("/signup");
    event.preventDefault();
  };

  const searchCourse = (event) => {
    setSearch(event.target.value);
    console.log(event.target.value);
  };

  return (
    <nav className={classes.Navbar}>
      <img src={UdemyLogo} alt="logo" onClick={toHome} />
      <Input
        inputType="input"
        label="Search"
        type="text"
        name="Search"
        value={search}
        onChange={searchCourse}
      />
      <ul>
        <NavItem routeName="Movies" routePath="/movies" />
        <NavItem routeName="Not Sure" routePath="/" />
      </ul>

      <div>
        <Button
          buttonName="Login"
          onClick={toLogin}
          className={classes.Login}
        />
        <Button
          buttonName="Sign Up"
          onClick={toRegister}
          className={classes.SignUp}
        />
      </div>
    </nav>
  );
}

export default Navbar;
