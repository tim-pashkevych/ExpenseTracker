import React from "react";
import s from "./BurgerMenuModal.module.css";
import CloseIcon from "@/assets/icons/Close.svg?react";
import { UserBarBtn } from "../UserBarBtn/UserBarBtn";

export const BurgerMenuModal = () => {
  return (
    <div className={s.backDrop}>
      <div className={s.wrapperModal}>
        <UserBarBtn />
        <button className={s.closeButton}>
          <CloseIcon className={s.closeSvg} />
        </button>
        <ul className={s.buttonList}>
          <button className={s.expenseButton}>All Expense</button>
          <button className={s.incomeButton}>All Income</button>
        </ul>
      </div>
    </div>
  );
};
