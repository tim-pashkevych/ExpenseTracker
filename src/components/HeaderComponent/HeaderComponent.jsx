import React from "react";
import s from "./HeaderComponent.module.css";
import LogoIcon from "@/assets/icons/Logo.svg?react";
import { BurgerComponent } from "../BurgerComponent/BurgerComponent";
import classNames from "classnames";

export const HeaderComponent = () => {
  const isLoggedIn = false;
  const classNamess = classNames(s.sectionStyle, {
    [s.stylesIsLogin]: isLoggedIn,
  });
  return (
    <section className={classNamess}>
      <div className={s.wrapperLogo}>
        <LogoIcon className={s.logo} />
        <h2 className={s.titleLogo}>ExpenseTracker</h2>
      </div>
      {isLoggedIn && <BurgerComponent />}
    </section>
  );
};
