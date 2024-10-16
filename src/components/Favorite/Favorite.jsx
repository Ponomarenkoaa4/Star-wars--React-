import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import icon from "./img/bookmark.svg";

import styles from "./Favorite.module.css";

const Favorite = () => {
  const [count, setCount] = useState(0);

  const storeData = useSelector((state) => state.favoriteReducer);

  useEffect(() => {
    const lenght = Object.keys(storeData).length;
    lenght.toString().length > 2 ? setCount("...") : setCount(lenght);
  });

  return (
    <div className={styles.container}>
      <Link to="/favorites">
        <span className={styles.counter}>{count}</span>
        <img className={styles.icon} src={icon} alt="bookmark" />
      </Link>
    </div>
  );
};

export default Favorite;
