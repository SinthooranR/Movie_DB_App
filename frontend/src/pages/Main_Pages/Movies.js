import React, { useEffect, useState } from "react";
import Movie from "../../components/Movie/Movie";
import axios from "axios";
import {useHistory} from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import {movieSelector, setMovieId} from '../../reduxState/features/loginSlice';

import classes from "./Movies.module.scss";

const POP_MOVIES_API = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_CODE}`;

const SEARCH_MOVIE = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_CODE}&language=en-US&page=1&include_adult=false&query=`;

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const history = useHistory();
  const dispatch = useDispatch();


  const viewMovie = (event, id) => {
    history.push("/movieDetails");
    dispatch(setMovieId(id));
    event.preventDefault();
  }

  useEffect(() => {
    const popMoviesFetch = async () => {
      axios.get(POP_MOVIES_API).then((response) => {
        setMovies(response.data.results);
      });
    };

    popMoviesFetch();
  }, []);

  // console.log(movies);
  return (
    <div className={classes.Movies}>
      {movies.length > 0 &&
        movies.map((mov) => {
          return (
            <div key={mov.id}>
              <Movie title={mov.title} poster_path={mov.poster_path} btnClick={(e) => viewMovie(e, mov.id)}/>
            </div>
          );
        })}
    </div>
  );
};

export default Movies;
