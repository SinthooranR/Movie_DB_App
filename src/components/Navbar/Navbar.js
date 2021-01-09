import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import NavItem from "./NavItem";
import Input from "../Reusable/Input";
import Button from "../Reusable/Button";
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
      </div>
    </nav>
  );
}

export default Navbar;
