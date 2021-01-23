import React, { MouseEvent } from "react";
import Button from "../Reusable/Button";
import classes from "./Movie.module.scss"

const IMAGE_API = "https://image.tmdb.org/t/p/w500/";

interface MovieProps {
  poster_path: string;
  title: string;
  btnClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

function Movie(props: MovieProps) {
  return (
    <div className={classes.Movie}>
      <img src={IMAGE_API + props.poster_path} alt="" />
      <div>
        <h3>{props.title}</h3>
        <Button buttonName="More" onClick={props.btnClick} />
      </div>
    </div>
  );
}

export default Movie;
