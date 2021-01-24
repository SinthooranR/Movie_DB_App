import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { mainSelector } from "../../reduxState/slices/loginSlice";
import axios from "axios";

import Movie from "../../components/Movie/Movie";
import classes from "./Movies.module.scss";

interface Movie {
  title: string;
  poster_path: string;
}

function MovieDetails() {
  const { movieId } = useSelector(mainSelector);

  const [{ title, poster_path, overview, status, vote_avg }, setMovie] = useState({
    title: "",
    poster_path: "",
    overview: "",
    status: "",
    vote_avg: null
  });

  const MOVIE_API = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_CODE}&language=en-US`;
  const IMAGE_API = "https://image.tmdb.org/t/p/w500/";

  useEffect(() => {
    const popMoviesFetch = async () => {
      await axios.get(MOVIE_API).then((response) => {
        setMovie({
          title: response.data.title,
          poster_path: response.data.poster_path,
          overview: response.data.overview,
          status: response.data.status,
          vote_avg: response.data.vote_average
          });
        console.log(response);
      });
    };

    popMoviesFetch();
  }, []);

  //   console.log(movie);

  return (
    <div className={classes.Movies}>
      <h1>{title}</h1>
      <img src={IMAGE_API + poster_path} alt=""/>
    </div>
  );
}

export default MovieDetails;
