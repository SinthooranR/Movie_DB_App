import React, { MouseEvent } from "react";
import noImage from "../../assets/noImage.png";
import classes from "./Movie.module.scss";

const IMAGE_API = "https://image.tmdb.org/t/p/w500/";

interface MovieProps {
  poster_path: string;
  title: string;
  imgClick?: (event: MouseEvent<HTMLImageElement>) => void;
}

function Movie(props: MovieProps) {
  return (
    <div className={classes.Movie}>
      {props.poster_path ? (
        <img
          src={IMAGE_API + props.poster_path}
          alt=""
          onClick={props.imgClick}
        />
      ) : (
        <img src={noImage} alt="" onClick={props.imgClick} />
      )}
      <div>
        <h3>{props.title}</h3>
      </div>
    </div>
  );
}

export default Movie;
