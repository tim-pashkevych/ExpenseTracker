import styles from "./Icon.module.css";
import icons from "icons/icons.svg";

export const Icon = () => {
  return (
    <svg className={styles.timeFieldIcon}>
      <use href={`${icons}#icon-clock`}></use>
    </svg>
  );
};
