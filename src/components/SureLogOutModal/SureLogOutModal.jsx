import React from "react";
import s from "./SureLogOutModal.module.css";
import CloseSure from "@/assets/icons/CloseSure.svg?react";

export const SureLogOutModal = () => {
  return (
    <div className={s.backDropSure}>
      <div className={s.wrapperModalSure}>
        <button className={s.sureClose}>
          <CloseSure className={s.svgCloseSure} />
        </button>
        <p className={s.textSure}>Are you sure you want to log out?</p>
        <ul className={s.listButtonSure}>
          <li>
            <button className={s.buttonLogOut}>Log out</button>
          </li>
          <li>
            <button className={s.buttonCancel}>Cancel</button>
          </li>
        </ul>
      </div>
    </div>
  );
};
