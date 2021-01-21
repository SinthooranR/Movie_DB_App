import React from "react";
import { useSelector } from "react-redux";
import { movieSelector } from "../../reduxState/features/loginSlice";

const MovieDetails = (props) => {
  const { movieId } = useSelector(movieSelector);
  console.log(movieId);
  return <div>Hi</div>;
};

export default MovieDetails;