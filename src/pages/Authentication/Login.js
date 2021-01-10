import React, { useState } from "react";

import { useHistory } from "react-router-dom";

import Input from "../../components/Reusable/Input";
import Button from "../../components/Reusable/Button";

import classes from "./Auth.module.scss";

function Login() {
  const [{ email, password }, setInfo] = useState({
    email: "",
    password: "",
  });
  const history = useHistory();

  const emailHandler = (event) => {
    setInfo({ email: event.target.value, password });
  };

  const passwordHandler = (event) => {
    setInfo({ email, password: event.target.value });
  };

  const loginHandler = (event) => {
    alert(`${email}, ${password}`);
    history.push("/movies");
    event.preventDefault();
  };

  return (
    <div className={classes.Auth}>
      <h2>Sign into Netflix</h2>
      <form onSubmit={loginHandler}>
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
        <Button buttonName="Login" type="submit" />
      </form>
    </div>
  );
}

export default Login;
