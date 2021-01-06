import React, { useState } from "react";

import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../reduxState/features/authSlice";

import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

import classes from "./Auth.module.scss";

function Login() {
  const [{ email, password }, setInfo] = useState({
    email: "",
    password: "",
  });
  const history = useHistory();
  const dispatch = useDispatch();

  const emailHandler = (event) => {
    setInfo({ email: event.target.value, password });
  };

  const passwordHandler = (event) => {
    setInfo({ email, password: event.target.value });
  };

  const loginHandler = (event) => {
    alert(`${email}, ${password}`);
    dispatch(login({ email: email, password: password, loggedIn: true }));
    history.push("/");
    event.preventDefault();
  };

  return (
    <div className={classes.Auth}>
      <h2>Login to Your Udemy Account</h2>
      <form onSubmit={loginHandler}>
        <Input
          inputType="input"
          label="Email"
          type="email"
          name="Enter Your Email"
          value={email}
          onChange={emailHandler}
        />
        <Input
          inputType="input"
          label="Password"
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
