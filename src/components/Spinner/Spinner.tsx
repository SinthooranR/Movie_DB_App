import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { mainSelector } from "../../reduxState/slices/movieSlice";
import CircularProgress from "@material-ui/core/CircularProgress";
import Modal from "react-modal";
import classes from "./Spinner.module.scss";
import { setTimeout } from "timers";

interface SpinnerProps {
  className?: string;
}

const Spinner = ({ className }: SpinnerProps) => {
  const [check, setCheck] = useState(true);
  const { theme } = useSelector(mainSelector);
  const [openModal, setOpenModal] = useState(true);

  let spinner;
  let backgroundColor;
  let fontColor;
  if (theme) {
    spinner = (
      <CircularProgress color="secondary" size={100} className={className} />
    );
    backgroundColor = "rgba(0, 0, 1, 0.75)";
    fontColor = "white";
  } else {
    spinner = (
      <CircularProgress color="primary" size={100} className={className} />
    );
    backgroundColor = "rgba(255, 255, 255, 0.75)";
    fontColor = "black";
  }

  useEffect(() => {
    let timer = setTimeout(() => {
      setCheck(false);
    }, 1500);

    const timer2 = setTimeout(() => {
      setOpenModal(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
    };
  }, [check, openModal]);

  return (
    <Modal
      isOpen={openModal}
      ariaHideApp={false}
      className={classes.Spinner}
      style={{ overlay: { backgroundColor: `${backgroundColor}` } }}
    >
      <div>
        {check ? (
          <React.Fragment>{spinner}</React.Fragment>
        ) : (
          <h1 style={{ color: `${fontColor}` }}>Nothing Found</h1>
        )}
      </div>
    </Modal>
  );
};

export default Spinner;
