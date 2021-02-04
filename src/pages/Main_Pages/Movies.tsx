import React, { useEffect, useState, MouseEvent, FormEvent } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  setMovieId,
  setSearchString,
} from "../../reduxState/slices/movieSlice";
import Movie from "../../components/Movie/Movie";
import Button from "../../components/Reusable/Button";
import Input from "../../components/Reusable/Input";
import MovieModal from "../../components/Movie/MovieModal";
import classes from "./Movies.module.scss";

interface MovieType {
  id: number;
  title: string;
  poster_path: string;
}

function Movies() {
  const [movies, setMovies] = useState<MovieType[]>([]);
  const [page, setPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  const [search, setSearch] = useState("");

  const movePage = (
    event: MouseEvent<HTMLButtonElement>,
    nextPage: boolean
  ) => {
    if (nextPage) {
      setPage(page + 1);
    } else {
      setPage(page - 1);
    }
    event.preventDefault();
  };

  const openModal = (event: MouseEvent<HTMLImageElement>, id: number) => {
      dispatch(setMovieId(id));
      setShowModal(true);
      event.preventDefault();
  };

  const closeModal = (event: MouseEvent<HTMLButtonElement>) => {
    setShowModal(false);
    event.preventDefault();
};

  useEffect(() => {
    const popMoviesFetch = async () => {
      await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_CODE}&language=en-US&page=${page}`
      )
        .then((response) => response.json())
        .then((data) => {
          setMovies(data.results);
        });
    };
    popMoviesFetch();
  }, [page]);


  const searchMovie = (event: FormEvent<HTMLInputElement>) => {
    setSearch(event.currentTarget.value);
  };

  const submitSearch = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    history.push("/searchResults");
    dispatch(setSearchString(search));
  };

  return (
    <React.Fragment>
      <form onSubmit={submitSearch}>
        <Input
          type="search"
          name="Enter Movie"
          value={search}
          onChange={searchMovie}
          className={classes.Search}
        />
      </form>
      <div className={classes.MainPage}>
        <Button
          buttonName="<"
          onClick={(e) => movePage(e, false)}
          disabled={page <= 1}
        />
        <div className={classes.Movies}>
          {movies.length > 0 &&
            movies.map((mov) => {
              return (
                <div key={mov.id}>
                  <Movie
                    title={mov.title}
                    poster_path={mov.poster_path}
                    imgClick={(e) => openModal(e, mov.id)}
                  />
                </div>
              );
            })}
        </div>
        <Button
          buttonName=">"
          onClick={(e) => movePage(e, true)}
          disabled={movies.length === 0}
        />
      </div>
      <MovieModal showModal={showModal} modalClick={closeModal} />
    </React.Fragment>
  );
}

export default Movies;
