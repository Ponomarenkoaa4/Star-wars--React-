import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import {
  useTheme,
  THEME_LIGHT,
  THEME_DARK,
  THEME_NEITRAL,
} from "@context/ThemeProvider";
import imgLight from "./img/light.jpg";
import imgDark from "./img/dark.jpg";
import imgNeitral from "./img/neitral.jpg";

import styles from "./ChooseSide.module.css";

const ChooseSideImg = ({ theme, text, img, classes }) => {
  const isTheme = useTheme();

  return (
    <div
      className={cn(styles.item, classes)}
      onClick={() => isTheme.change(theme)}
    >
      <div className={styles.item__header}>{text}</div>
      <img className={styles.item__img} src={img} alt={text} />
    </div>
  );
};

ChooseSideImg.propTypes = {
  theme: PropTypes.string,
  text: PropTypes.string,
  img: PropTypes.string,
  classes: PropTypes.string,
};

const ChooseSide = () => {
  const elements = [
    {
      classes: styles.item__light,
      theme: THEME_LIGHT,
      text: "Light side",
      img: imgLight,
    },
    {
      classes: styles.item__dark,
      theme: THEME_DARK,
      text: "Dark side",
      img: imgDark,
    },
    {
      classes: styles.item__neitral,
      theme: THEME_NEITRAL,
      text: "I`m Han Solo",
      img: imgNeitral,
    },
  ];
  return (
    <div className={styles.container}>
      {elements.map(({ theme, text, img, classes }, index) => (
        <ChooseSideImg
          key={index}
          theme={theme}
          text={text}
          img={img}
          classes={classes}
        />
      ))}
    </div>
  );
};

export default ChooseSide;
