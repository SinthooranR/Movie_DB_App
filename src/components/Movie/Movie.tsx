import React, { MouseEvent, useState } from "react";
import noImage from "../../assets/noImage.png";
import MiniDetails from "./MiniDetails";
import classes from "./Movie.module.scss";

const IMAGE_API = "https://image.tmdb.org/t/p/w500/";

interface MovieProps {
  poster_path: string;
  title: string;
  rating?: Number;
  imgClick?: (event: MouseEvent<HTMLImageElement>) => void;
  incremented?: Boolean | null;
}

const Movie = ({
  poster_path,
  imgClick,
  title,
  rating,
  incremented,
}: MovieProps) => {
  const [miniDetails, setMini] = useState(false);
  return (
    <div
      className={[
        classes.Movie,
        incremented !== null
          ? incremented
            ? classes.FadeRight
            : classes.FadeLeft
          : classes.FadeDefault,
      ].join(" ")}
    >
      <div
        className={classes.Content}
        onMouseEnter={() => setMini(true)}
        onMouseLeave={() => setMini(false)}
        onClick={imgClick}
      >
        {poster_path ? (
          <img src={IMAGE_API + poster_path} alt="" />
        ) : (
          <img src={noImage} alt="" />
        )}
        <div>{!poster_path && <h3>{title}</h3>}</div>
        {miniDetails && <MiniDetails title={title} rating={rating} />}
      </div>
    </div>
  );
};

export default Movie;
