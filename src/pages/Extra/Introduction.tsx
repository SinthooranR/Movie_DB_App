import React, {MouseEvent} from "react";
import {useHistory} from 'react-router-dom';
import Button from "../../components/Reusable/Button";
import classes from "./Introduction.module.scss";

function Introduction() {
  const history = useHistory();

  const toMovies = (event: MouseEvent<HTMLButtonElement>) => {
    history.push("/movies");
    event.preventDefault();
  }

  return (
    <div className={classes.Intro}>
      <h1>Welcome</h1>
      <Button buttonName="PROCEED" onClick={toMovies}/>
    </div>
  );
}

export default Introduction;
