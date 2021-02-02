import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { mainSelector } from "../../reduxState/slices/movieSlice";
import classes from "./MovieDetails.module.scss";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
}

function MovieDetails() {
  const { movieId } = useSelector(mainSelector);

  const [movie, setMovie] = useState<Movie[] | any>([]);

  const IMAGE_API = "https://image.tmdb.org/t/p/w500/";

  useEffect(() => {
    const popMoviesFetch = async () => {
      await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_CODE}&language=en-US`
      )
        .then((response) => response.json())
        .then((data) => {
          setMovie(data);
        });
    };
    popMoviesFetch();
  }, [movieId]);

  console.log(movie);

  return (
    <div className={classes.Movie}>
      <img src={IMAGE_API + movie.poster_path} alt="" />
      <div key={movie.id}>
        <h1>{movie.title}</h1>
      </div>
    </div>
  );
}

export default MovieDetails;
