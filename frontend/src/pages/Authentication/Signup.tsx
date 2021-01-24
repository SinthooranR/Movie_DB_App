import React, { useState, MouseEvent, FormEvent } from "react";

import { useHistory } from "react-router-dom";

import Input from "../../components/Reusable/Input";
import Button from "../../components/Reusable/Button";

import classes from "./Auth.module.scss";

function Signup() {
  const history = useHistory();
  const [{ name, email, password }, setInfo] = useState({
    name: "",
    email: "",
    password: "",
  });

  const nameHandler = (event: FormEvent<HTMLInputElement>) => {
    setInfo({ name: event.currentTarget.value, email, password });
  };

  const emailHandler = (event: FormEvent<HTMLInputElement>) => {
    setInfo({ name, email: event.currentTarget.value, password });
  };

  const passwordHandler = (event: FormEvent<HTMLInputElement>) => {
    setInfo({ name, email, password: event.currentTarget.value });
  };

  const signupHandler = (event: FormEvent<HTMLFormElement>) => {
    alert(`${name}, ${email}, ${password}`);
    history.push("/movies");
    event.preventDefault();
  };

  return (
    <div className={classes.Auth}>
      <h2>Sign into Netflix</h2>
      <form onSubmit={signupHandler}>
        <Input
          icon="name"
          type="text"
          name="Enter Your Name"
          value={name}
          onChange={nameHandler}
        />
        <Input
          icon="email"
          type="email"
          name="Enter Your Email"
          value={email}
          onChange={emailHandler}
        />
        <Input
          icon="password"
          type="password"
          name="Enter Your Password"
          value={password}
          onChange={passwordHandler}
        />
        <Button buttonName="Sign Up" type="submit" />
      </form>
    </div>
  );
}

export default Signup;
