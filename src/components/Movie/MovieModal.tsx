import React, { useEffect, useState, MouseEvent } from "react";
import Modal from "react-modal";
import { useSelector } from "react-redux";
import { mainSelector } from "../../reduxState/slices/movieSlice";
import Button from "../Reusable/Button";
import Spinner from "../Spinner/Spinner";
import classes from "./MovieModal.module.scss";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  name: string;
}

interface ModalProps {
  showModal: boolean;
  modalClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

function MovieModal(props: ModalProps) {
  const IMAGE_API = "https://image.tmdb.org/t/p/w500/";
  const [movie, setMovie] = useState<Movie[] | any>([]);
  const [genre, setGenre] = useState<any>([]);

  const { movieId, theme } = useSelector(mainSelector);

  // temportary variables
  let background;
  let backgroundColor;
  let fontColor;
  let buttonColor;

  if (theme) {
    backgroundColor = "#232526";
    backgroundColor = "rgba(0, 0, 0, 0.75)";
    fontColor = classes.Dark;
    buttonColor = classes.DarkButton;
  } else {
    background = "#fafafa";
    backgroundColor = "rgba(255, 255, 255, 0.75)";
    fontColor = classes.Light;
    buttonColor = classes.LightButton;
  }

  useEffect(() => {
    const popMoviesFetch = async () => {
      await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_CODE}&language=en-US`
      )
        .then((response) => response.json())
        .then((data) => {
          setMovie(data);
          setGenre(data.genres);
        });
    };
    popMoviesFetch();
  }, [movieId]);



  return (
    <Modal isOpen={props.showModal} ariaHideApp={false} style={{overlay: {backgroundColor: `${backgroundColor}`}, content: {background: `${background}`}}}>
      <Button buttonName="Go Back" onClick={props.modalClick} className={[classes.BackButton, buttonColor].join(" ")}/>
      {movieId === movie.id ? (
        <div className={[classes.Movie, fontColor].join(" ")}>
          <div>
            <h2>{movie.title}</h2>
            <img src={IMAGE_API + movie.poster_path} alt="" />
          </div>
          <div key={movie.id} className={classes.MovieInfo}>
            <h3>Overview</h3>
            <p>{movie.overview}</p>
            <h3>Rating</h3>
            <h4>{movie.vote_average}</h4>
            <h3>Genres: </h3>
            <div className={classes.Genres}>
              {genre !== undefined &&
                genre.map((gen: any) => <h4 key={gen.id}>{gen.name}</h4>)}
            </div>
          </div>
        </div>
      ) : (
        <Spinner />
      )}
    </Modal>
  );
}

export default MovieModal;
