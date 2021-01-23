import React, { useEffect, useState, MouseEvent } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import {useDispatch} from 'react-redux';
import {setMovieId} from '../../reduxState/slices/loginSlice';
import Movie from '../../components/Movie/Movie';
import classes from "./Movies.module.scss";

interface Movie {
    id: number;
    title: string;
    poster_path: string;
}

const POP_MOVIES_API = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_CODE}`;

const SEARCH_MOVIE = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_CODE}&language=en-US&page=1&include_adult=false&query=`;

function Movies() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const history = useHistory();
  const dispatch = useDispatch();

  const viewMovie = (event: MouseEvent<HTMLButtonElement>, id: number) => {
    history.push("/movieDetails");
    dispatch(setMovieId(id));
    event.preventDefault();
  };

  useEffect(() => {
    const popMoviesFetch = async () => {
      await axios.get(POP_MOVIES_API).then((response) => {
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
  )
}

export default Movies;
