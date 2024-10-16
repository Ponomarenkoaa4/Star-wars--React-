import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

import { setPersonToFavorite, removePersonFromFavorite } from "@store/actions";
import iconFavorite from "./img/star.svg";
import iconFavoriteFill from "./img/star-fill.svg";

import styles from "./PersonImg.module.css";

const PersonImg = ({
  personPhoto,
  personName,
  personId,
  setPersonFavorite,
  personFavorite,
}) => {
  const dispatch = useDispatch();

  const dispatchFavoritePeople = () => {
    if (personFavorite) {
      dispatch(removePersonFromFavorite(personId));
      setPersonFavorite(false);
    } else {
      dispatch(
        setPersonToFavorite({
          [personId]: { name: personName, img: personPhoto },
        })
      );
      setPersonFavorite(true);
    }
  };

  return (
    <>
      <div className={styles.container}>
        <img className={styles.photo} src={personPhoto} alt={personName} />
        <img
          className={styles.favorite}
          onClick={dispatchFavoritePeople}
          src={personFavorite ? iconFavoriteFill : iconFavorite}
          alt="star"
        />
      </div>
    </>
  );
};

PersonImg.propTypes = {
  personId: PropTypes.string,
  personPhoto: PropTypes.string,
  personName: PropTypes.string,
  personFavorite: PropTypes.bool,
  setPersonFavorite: PropTypes.func,
};

export default PersonImg;
