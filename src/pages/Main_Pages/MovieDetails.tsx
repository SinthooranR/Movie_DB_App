import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { mainSelector } from "../../reduxState/slices/loginSlice";
import axios from "axios";

import Movie from "../../components/Movie/Movie";
import classes from "./Movies.module.scss";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
}

function MovieDetails() {
  const { movieId } = useSelector(mainSelector);
  const [movie, setMovie] = useState<Movie[]>([]);

  const MOVIE_API = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_CODE}&language=en-US`;
  const IMAGE_API = "https://image.tmdb.org/t/p/w500/";

  useEffect(() => {
    const popMoviesFetch = async () => {
      await axios.get(MOVIE_API).then((response) => {
        setMovie(response.data);
        console.log(response.data);
      });
    };

    popMoviesFetch();
  }, []);

  //   console.log(movie);

  return (
    <div className={classes.Movies}>
      {movie.length > 0 && movie.map((mov) => {
        return (
          <div key={mov.id}>
            <img src={IMAGE_API + mov.poster_path}/>
          </div>
        );
      })}
    </div>
  );
}

export default MovieDetails;
