import React, { useState } from "react";
import Input from "../../components/Reusable/Input";
import Button from "../../components/Reusable/Button";
import { useHistory } from "react-router-dom";
import classes from "./Auth.module.scss";

const Intro = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");

  const signUpHandler = (event) => {
    history.push("/signup");
    event.preventDefault();
  };

  const emailChange = (event) => {
    setEmail(event.target.value);
    event.preventDefault();
  };

  return (
    <div className={classes.Auth}>
      <h1>Welcome</h1>
      <Input
        icon="email"
        type="email"
        name="Email"
        value={email}
        onChange={emailChange}
      />
      <Button onClick={signUpHandler} buttonName="GET STARTED" />
    </div>
  );
};

export default Intro;
