import React, { useState, MouseEvent, FormEvent } from "react";
import { useHistory } from "react-router-dom";

import NavItem from "./NavItem";
import Input from "../Reusable/Input";
import Button from "../Reusable/Button";
import UdemyLogo from "../../assets/udemy.png";

import classes from "./Navbar.module.scss";

function Navbar() {
  const history = useHistory();
  const [search, setSearch] = useState("");

  const toPage = (event: MouseEvent<HTMLElement>, path: string) => {
    history.push(`/${path}`);
    event.preventDefault();
  };

  const searchCourse = (event: FormEvent<HTMLInputElement>) => {
    setSearch(event.currentTarget.value);
    console.log(search);
  }

  return (
    <nav className={classes.Navbar}>
        <img src={UdemyLogo} alt="logo" onClick={(e) => toPage(e, "")} />
        <Input 
        type="text"
        name="Search Movie"
        value={search}
        onChange={searchCourse}/>
      <ul>
        <NavItem routeName="Movies" routePath="/movies" />
        <NavItem routeName="Not Sure" routePath="/" />
      </ul>

      <Button buttonName="Login" onClick={(e) => toPage(e, "login")} className={classes.Login} />
    </nav>
  );
}

export default Navbar;
