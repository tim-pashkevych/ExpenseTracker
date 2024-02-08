import styles from "./DecorationTab.module.css";
// import { ReactComponent as ArrowTopRight } from "../icons/ArrowTopRight.svg";
export const DecorationTab = () => {
  return (
    <div
      className={styles.decorationTabTest}
      style={{
        position: "absolute",
        bottom: `141px`,
        left: `-10px`,
      }}
    >
      <div className={styles.decorationTab}>
        {/* <ArrowTopRight className={styles.arrowTopRight} /> */}
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
