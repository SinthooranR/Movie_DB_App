import React, { useEffect, useState, MouseEvent } from "react";
import Modal from "react-modal";
import { useSelector } from "react-redux";
import { mainSelector } from "../../reduxState/slices/movieSlice";
import Button from "../Reusable/Button";
import classes from "./MovieModal.module.scss";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  name: string;
  showModal: boolean;
  modalClick: () => void;
}

interface ModalProps {
  showModal: boolean;
  modalClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

const MovieModal = ({ showModal, modalClick }: ModalProps) => {
  const IMAGE_API = "https://image.tmdb.org/t/p/w500/";
  const [movie, setMovie] = useState<Movie[] | any>([]);
  const [genre, setGenre] = useState<any>([]);

  const { movieId, theme } = useSelector(mainSelector);

  // temportary variables
  let background;
  let fontColor;
  let buttonColor;

  if (theme) {
    fontColor = classes.Dark;
    background = "#232526";
    buttonColor = classes.LightButton;
  } else {
    background = "#fafafa";
    fontColor = classes.Light;
    buttonColor = classes.DarkButton;
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
    <Modal
      isOpen={showModal}
      ariaHideApp={false}
      style={{
        overlay: { backgroundImage: `${""}` },
        content: {
          background: `${background}`,
          overflowY: "scroll",
          WebkitOverflowScrolling: "touch",
          borderRadius: "2.5rem",
        },
      }}
      onAfterOpen={() => {
        document.body.style.overflow = "hidden";
      }}
      onAfterClose={() => {
        document.body.style.overflow = "scroll";
      }}
    >
      <Button
        buttonName="Go Back"
        onClick={modalClick}
        className={[classes.BackButton, buttonColor].join(" ")}
      />
      {movieId === movie.id && (
        <div className={[classes.Movie, fontColor].join(" ")}>
          <div className={classes.ImageContainer}>
            <h2>{movie.title}</h2>
            <img src={IMAGE_API + movie.poster_path} alt="" />
          </div>
          <div key={movie.id} className={classes.MovieInfo}>
            <h2>Overview</h2>
            <p>{movie.overview}</p>
            <h2>Rating</h2>
            <h4>{movie.vote_average}</h4>
            <h3>Genres: </h3>
            <div className={classes.Genres}>
              {genre !== undefined &&
                genre.map((gen: any) => <p key={gen.id}>{gen.name}</p>)}
            </div>
          </div>
        </div>
      )}
    </Modal>
  );
};

export default MovieModal;
