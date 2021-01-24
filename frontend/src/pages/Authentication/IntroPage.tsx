import React, { MouseEvent, FormEvent, useState } from "react";
import Input from "../../components/Reusable/Input";
import Button from "../../components/Reusable/Button";
import { useHistory } from "react-router-dom";
import classes from "./Auth.module.scss";

function IntroPage() {
  const history = useHistory();
  const [email, setEmail] = useState("");

  const signUpHandler = (event: MouseEvent<HTMLButtonElement>) => {
    history.push("/signup");
    event.preventDefault();
  };

  const emailChange = (event: FormEvent<HTMLInputElement>) => {
    setEmail(event.currentTarget.value);
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
}

export default IntroPage;
