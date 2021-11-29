import React from "react";
import classes from "./Movie.module.scss";

interface DetailProps {
  title?: string;
  rating?: any;
}

const MiniDetails = ({ title, rating }: DetailProps) => {
  return (
    <div className={classes.MiniDetails}>
      <div>
        <h4>{title}</h4>
        <h4>Rating: {rating}</h4>
      </div>
    </div>
  );
};

export default MiniDetails;
