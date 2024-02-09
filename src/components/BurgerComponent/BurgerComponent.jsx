import React from "react";
import s from "./BurgerComponent.module.css";
import BurgerIcon from "@/assets/icons/Burger.svg?react";

export const BurgerComponent = () => {
  return (
    <div className={s.wrapperBurger}>
      <button className={s.buttonBurger}>
        <BurgerIcon className={s.svgBurger} />
      </button>
    </div>
  );
};
