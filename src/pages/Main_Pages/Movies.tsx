import React, { useEffect, useState, MouseEvent, FormEvent } from "react";
import { useDispatch } from "react-redux";
import { setMovieId } from "../../reduxState/slices/movieSlice";
import Movie from "../../components/Movie/Movie";
import Button from "../../components/Reusable/Button";
import Input from "../../components/Reusable/Input";
import MovieModal from "../../components/Movie/MovieModal";
import classes from "./Movies.module.scss";

interface MovieType {
  id: number;
  title: string;
  poster_path: string;
  vote_average: Number;
}

const Movies = () => {
  const [movies, setMovies] = useState<MovieType[]>([]);
  const [page, setPage] = useState(1);
  const [incremented, setIncremented] = useState<Boolean | null>(null);
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const [search, setSearch] = useState("");

  const movePage = (
    event: MouseEvent<HTMLButtonElement>,
    nextPage: boolean
  ) => {
    if (nextPage) {
      setPage(page + 1);
      setIncremented(true);
    } else {
      setPage(page - 1);
      setIncremented(false);
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
    const searchMovies = async () => {
      await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_CODE}&language=en-US&query=${search}&page=${page}&include_adult=false`
      )
        .then((response) => response.json())
        .then((data) => {
          setMovies(data.results);
        })
        .catch((err) => {
          console.log(err);
        });
    };

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
    if (search.length > 0) {
      searchMovies();
    } else {
      popMoviesFetch();
    }
  }, [page, search]);

  const searchMovie = (event: FormEvent<HTMLInputElement>) => {
    setSearch(event.currentTarget.value);
  };

  return (
    <React.Fragment>
      <Input
        type="search"
        name="Enter Movie"
        value={search}
        onChange={searchMovie}
        className={classes.Search}
      />

      <div className={classes.ButtonArea}>
        <Button
          buttonName="<"
          onClick={(e) => movePage(e, false)}
          disabled={page <= 1}
        />
        <Button
          buttonName=">"
          onClick={(e) => movePage(e, true)}
          disabled={movies.length === 0}
        />
      </div>
      <div className={classes.MainPage}>
        <div className={classes.Movies}>
          {movies.length > 0 &&
            movies.map((mov) => {
              return (
                <div key={mov.id}>
                  <Movie
                    title={mov.title}
                    poster_path={mov.poster_path}
                    imgClick={(e) => openModal(e, mov.id)}
                    rating={mov.vote_average}
                    incremented={incremented}
                  />
                </div>
              );
            })}
        </div>
      </div>
      <MovieModal showModal={showModal} modalClick={closeModal} />
    </React.Fragment>
  );
};

export default Movies;
