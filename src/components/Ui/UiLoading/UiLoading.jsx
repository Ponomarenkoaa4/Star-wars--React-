import PropTypes from "prop-types";
import cn from "classnames";

import spinner from "./img/spinner.svg";
import loading from "./img/loading.svg";

import styles from "./UiLoading.module.css";

const UiLoading = ({ isShadow = true, classes = "" }) => {
  return (
    <div>
      <img
        className={cn(styles.spinner, isShadow && styles.shadow)}
        src={loading}
        alt="srinner"
      />
    </div>
  );
};

UiLoading.propTypes = {
  isShadow: PropTypes.bool,
  classes: PropTypes.string,
};

export default UiLoading;
