import React, { useEffect, useState, MouseEvent } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setMovieId } from "../../reduxState/slices/movieSlice";
import { mainSelector } from "../../reduxState/slices/movieSlice";
import Movie from "../../components/Movie/Movie";
import classes from "./Movies.module.scss";
import Button from "../../components/Reusable/Button";
import Spinner from "../../components/Spinner/Spinner";

interface MovieType {
  id: number;
  title: string;
  poster_path: string;
}

function SearchResults() {
  const [movies, setMovies] = useState<MovieType[]>([]);
  const [page, setPage] = useState(1);
  const history = useHistory();
  const dispatch = useDispatch();
  const { searchMovieString } = useSelector(mainSelector);

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

  const viewMovie = (event: MouseEvent<HTMLImageElement>, id: number) => {
    history.push("/movieDetails");
    dispatch(setMovieId(id));
    event.preventDefault();
  };

  useEffect(() => {
    const popMoviesFetch = async () => {
      await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_CODE}&language=en-US&query=${searchMovieString}&page=${page}&include_adult=false`
      )
        .then((response) => response.json())
        .then((data) => {
          setMovies(data.results);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    popMoviesFetch();
  }, [page, searchMovieString]);

  return (
    <React.Fragment>
      {movies.length > 0 && (
        <Button
          buttonName="Go Back"
          onClick={(e) => {
            history.push("/movies");
            e.preventDefault();
          }}
        />
      )}
      <div className={classes.MainPage}>
        <Button
          buttonName="<"
          onClick={(e) => movePage(e, false)}
          disabled={page <= 1}
        />
        <div className={classes.Movies}>
          {movies.length > 0 ? (
            movies.map((mov) => {
              return (
                <div key={mov.id}>
                  <Movie
                    title={mov.title}
                    poster_path={mov.poster_path}
                    imgClick={(e) => viewMovie(e, mov.id)}
                  />
                </div>
              );
            })
          ) : (
            <Spinner />
          )}
        </div>
        <Button
          buttonName=">"
          onClick={(e) => movePage(e, true)}
          disabled={movies.length === 0}
        />
      </div>
    </React.Fragment>
  );
}

export default SearchResults;
