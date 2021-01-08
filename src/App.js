import React, { useEffect, useState } from "react";
import Movie from "./components/Movie/Movie";
import axios from "axios";
import "./App.css";

const POP_MOVIES_API = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_CODE}`;

const SEARCH_MOVIE = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_CODE}&language=en-US&page=1&include_adult=false&query=`;

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const popMoviesFetch = async () => {
      axios.get(POP_MOVIES_API).then((response) => {
        setMovies(response.data.results);
      });
      // const movieResponse = await fetch(POP_MOVIES_API);
      // const moviesR = await movieResponse.json();
      // setMovies(moviesR);
    };

    popMoviesFetch();
  }, []);

  console.log(movies);

  return (
    <div>
      {movies.length > 0 &&
        movies.map((mov) => {
          return <Movie key={mov.id} {...mov} />;
        })}
    </div>
  );
}

export default App;
