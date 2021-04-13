import React, { MouseEvent } from "react";
import noImage from "../../assets/noImage.png";
import classes from "./Movie.module.scss";

const IMAGE_API = "https://image.tmdb.org/t/p/w500/";

interface MovieProps {
  poster_path: string;
  title: string;
  imgClick?: (event: MouseEvent<HTMLImageElement>) => void;
}

const Movie = ({ poster_path, imgClick, title }: MovieProps) => {
  return (
    <div className={classes.Movie}>
      {poster_path ? (
        <img src={IMAGE_API + poster_path} alt="" onClick={imgClick} />
      ) : (
        <img src={noImage} alt="" onClick={imgClick} />
      )}
      <div>{!poster_path && <h3>{title}</h3>}</div>
    </div>
  );
};

export default Movie;
