import { useState } from "react";
import { DecorationTab } from "../index";
import styles from "./BgImageWrapper.module.css";

export const BgImageWrapper = () => {
  const [position, setPosition] = useState();
  return (
    <div
      className={styles.bgImageWrapper}
      style={{
        position: "relative",
      }}
    >
      <picture>
        <source
          srcSet="
            ../images/image-mobile@1x.jpg 1x,
            ../images/image-mobile@2x.jpg 2x
          "
          type="image/jpg"
        />
        <img
          className={styles.bgImage}
          src="../images/image-mobile@1x.jpg"
          alt="Two persons"
        />
      </picture>
      <DecorationTab position={position} />
    </div>
  );
};
