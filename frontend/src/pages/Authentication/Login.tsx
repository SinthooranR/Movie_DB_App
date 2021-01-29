import React, { useState, FormEvent } from "react";

import { useHistory } from "react-router-dom";

import Input from "../../components/Reusable/Input";
import Button from "../../components/Reusable/Button";

import classes from "./Auth.module.scss";

function Login() {
  const history = useHistory();
  const [{ email, password }, setInfo] = useState({
    email: "",
    password: "",
  });

  const emailHandler = (event: FormEvent<HTMLInputElement>) => {
    setInfo({ email: event.currentTarget.value, password });
  };

  const passwordHandler = (event: FormEvent<HTMLInputElement>) => {
    setInfo({ email, password: event.currentTarget.value });
  };

  const loginHandler = async(event: FormEvent<HTMLFormElement>) => {
    alert(`${email}, ${password}`);
    event.preventDefault();
    history.push("/movies");
    // Fetch API call
    try{
      const body = {email, password };
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body)
      });
      const jsonData = await response.json();

      console.log(jsonData);
    }
    catch(err){
      console.error(err);
    }

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
