import styles from "./DecorationTab.module.css";
import ArrowTopRight from "../../../src/assets/icons/ArrowTopRight.svg?react";
export const DecorationTab = () => {
  return (
    <div
      style={{
        position: "absolute",
        bottom: `141px`,
        left: `-10px`,
      }}
    >
      <div className={styles.decorationTab}>
        <div className={styles.arrowWrapper}>
          <ArrowTopRight className={styles.arrowTopRight} />
        </div>
        <div>
          <h3 className={styles.text}>Your balance</h3>
          <ul className={styles.incomeList}>
            <li className={styles.income}>&#36;632.000</li>
            <li className={styles.icomePercentage}>&#43;1.29&#37;</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
