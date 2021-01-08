import React from "react";
import classes from "./Movie.module.scss";

const IMAGE_API = "https://image.tmdb.org/t/p/w500/";

const Movie = (props) => {
  return (
    // these prop names are based off the data names to use the spread operator properly
    <div className={classes.Movie}>
      <img src={IMAGE_API + props.poster_path} alt="" />
      <h3>{props.title}</h3>
    </div>
  );
};

export default Movie;
