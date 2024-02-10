import styles from "./Icon.module.css";

export const Icon = () => {
  return (
    <svg className={styles.timeFieldIcon}>
      <use href="/icons/icons.svg#icon-clock"></use>
    </svg>
  );
};
