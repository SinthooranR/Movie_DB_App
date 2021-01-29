import React, { useState, MouseEvent, FormEvent } from "react";

import { useHistory } from "react-router-dom";

import Input from "../../components/Reusable/Input";
import Button from "../../components/Reusable/Button";

import classes from "./Auth.module.scss";

function Signup() {
  const history = useHistory();
  const [{ name, email, password, plan }, setInfo] = useState({
    name: "",
    email: "",
    password: "",
    plan: ""
  });

  const nameHandler = (event: FormEvent<HTMLInputElement>) => {
    setInfo({ name: event.currentTarget.value, email, password, plan});
  };

  const emailHandler = (event: FormEvent<HTMLInputElement>) => {
    setInfo({ name, email: event.currentTarget.value, password, plan });
  };

  const passwordHandler = (event: FormEvent<HTMLInputElement>) => {
    setInfo({ name, email, password: event.currentTarget.value, plan });
  };

  const planHandler = (event: FormEvent<HTMLSelectElement>) => {
    setInfo({ name, email, password, plan: event.currentTarget.value });
  };

  const signupHandler = async(event: FormEvent<HTMLFormElement>) => {
    alert(`${name}, ${email}, ${password}`);
    event.preventDefault();
    history.push("/movies");
    // Fetch API call
    try{
      const body = { name, email, password, plan };
      const response = await fetch("http://localhost:5000/api/signup", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body)
      });

      console.log(response);
    }
    catch(err){
      console.error(err);
    }



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
        <select name="Plans" id="plans" onChange={planHandler} value={plan}>
          <option value="free">Free</option>
          <option value="basic">Basic</option>
          <option value="standard">Standard</option>
          <option value="premium">Premium</option>
        </select>

        <Button buttonName="Sign Up" type="submit" />
      </form>
    </div>
  );
}

export default Signup;
