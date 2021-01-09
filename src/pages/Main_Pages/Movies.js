import React, { useEffect, useState } from "react";
import Movie from "../../components/Movie/Movie";
import axios from "axios";
import classes from "./Movies.module.scss";

const POP_MOVIES_API = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_CODE}`;

const SEARCH_MOVIE = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_CODE}&language=en-US&page=1&include_adult=false&query=`;

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const popMoviesFetch = async () => {
      axios.get(POP_MOVIES_API).then((response) => {
        setMovies(response.data.results);
      });
    };

    popMoviesFetch();
  }, []);

  console.log(movies);
  return (
    <div className={classes.Movies}>
      {movies.length > 0 &&
        movies.map((mov) => {
          return (
            <div key={mov.id}>
              <Movie {...mov} />
            </div>
          );
        })}
    </div>
  );
};

export default Movies;
