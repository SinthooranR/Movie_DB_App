import React, { useState } from "react";

import Button from "../Button/Button";
import NavItem from "./NavItem";
import { useHistory } from "react-router-dom";
import Input from "../Input/Input";
import UdemyLogo from "../../assets/udemy.png";
import { useSelector } from "react-redux";
import { setAuth } from "../../reduxState/features/authSlice";

import classes from "./Navbar.module.scss";

function Navbar() {
  const history = useHistory();
  const [search, setSearch] = useState("");

  const auth = useSelector(setAuth);

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
      <select name="Categories">
        <option value="">Categories</option>
        <option value="Angular">Angular</option>
        <option value="VueJS">VueJS</option>
        <option value="React">React</option>
      </select>

      <Input
        inputType="input"
        label="Search"
        type="text"
        name="Search"
        value={search}
        onChange={searchCourse}
      />
      <ul>
        <NavItem routeName="Udemy for Business" routePath="/" />
        <NavItem routeName="Teach on Udemy" routePath="/myCourses" />
      </ul>
      {!auth && (
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
      )}
    </nav>
  );
}

export default Navbar;
