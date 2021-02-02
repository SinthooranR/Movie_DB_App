import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { mainSelector } from "../../reduxState/slices/movieSlice";
import axios from "axios";
import classes from "./MovieDetails.module.scss";
import { Backdrop } from "@material-ui/core";

interface Movie {
  title: string;
  poster_path: string;
}

function MovieDetails() {
  const { movieId } = useSelector(mainSelector);

  const [
    { title, poster_path, overview, status, vote_avg, backdrop_path },
    setMovie,
  ] = useState({
    title: "",
    poster_path: "",
    overview: "",
    status: "",
    backdrop_path: "",
    vote_avg: null,
  });

  const IMAGE_API = "https://image.tmdb.org/t/p/w500/";

  useEffect(() => {
    const popMoviesFetch = async () => {
      await axios
        .get(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_CODE}&language=en-US`
        )
        .then((response) => {
          setMovie({
            title: response.data.title,
            poster_path: response.data.poster_path,
            overview: response.data.overview,
            status: response.data.status,
            vote_avg: response.data.vote_average,
            backdrop_path: response.data.backdrop_path,
          });
          console.log(response);
        })
        .catch((error) => {
          console.error(error);
        });
    };

    popMoviesFetch();
  }, [poster_path]);

  //   console.log(movie);

  return (
    <div
      className={classes.MovieBackground}
      style={{
        backgroundImage: `url(${IMAGE_API + backdrop_path})`,
      }}
    >
      <div className={classes.MovieDetails}>
        <h1>{title}</h1>
        <img src={IMAGE_API + poster_path} alt="" />
        {/* <img src={IMAGE_API + backdrop_path} /> */}
      </div>
    </div>
  );
}

export default MovieDetails;
