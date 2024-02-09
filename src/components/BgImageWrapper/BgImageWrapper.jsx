import { DecorationTab } from "../index";
import styles from "./BgImageWrapper.module.css";

export const BgImageWrapper = () => {
  return (
    <div
      className={styles.bgImageWrapper}
      style={{
        position: "relative",
      }}
    >
      <DecorationTab />
    </div>
  );
};
