import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  useTheme,
  THEME_LIGHT,
  THEME_DARK,
  THEME_NEITRAL,
} from "@context/ThemeProvider";
import Favorite from "@components/Favorite";

import imgDark from "./img/dark.svg";
import imgLight from "./img/light.svg";
import imgNeitral from "./img/neitral.svg";

import styles from "./Header.module.css";

const Header = () => {
  const [icon, setIcon] = useState(imgNeitral);
  const isTheme = useTheme();

  useEffect(() => {
    switch (isTheme.theme) {
      case THEME_LIGHT:
        setIcon(imgLight);
        break;
      case THEME_DARK:
        setIcon(imgDark);
        break;
      case THEME_NEITRAL:
        setIcon(imgNeitral);
        break;

      default:
        setIcon(imgNeitral);
    }
  }, [isTheme]);

  return (
    <div className={styles.container}>
      <img className={styles.logo} src={icon} alt="logo" />

      <ul className={styles.list__container}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/people/?page=1">People</NavLink>
        </li>
        <li>
          <NavLink to="/search">Search</NavLink>
        </li>
        <li>
          <NavLink to="/not-found">Not found</NavLink>
        </li>
        <li>
          <NavLink to="/fail">Fail</NavLink>
        </li>
      </ul>
      <Favorite />
    </div>
  );
};

export default Header;
