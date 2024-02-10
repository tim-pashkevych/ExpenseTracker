import React from "react";
import styles from "./UserBarBtnBox.module.css";
import { UserBarBtn } from "../UserBarBtn/UserBarBtn";

export const UserBarBtnBox = () => {
  return (
    <div className={styles.boxAbsolute}>
      <UserBarBtn />
    </div>
  );
};
