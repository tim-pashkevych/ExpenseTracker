import React, { useState } from "react"
import styles from "./BurgerComponent.module.css"
import BurgerIcon from "@/assets/icons/Burger.svg?react"
import { BurgerMenuModal } from "../BurgerMenuModal/BurgerMenuModal"

export const BurgerComponent = () => {
  const [isModal, setIsModal] = useState(false)
  return (
    <div className={styles.wrapperBurger}>
      <button className={styles.buttonBurger} onClick={() => setIsModal(true)}>
        <BurgerIcon className={styles.svgBurger} />
      </button>

      <BurgerMenuModal isOpened={isModal} onClose={() => setIsModal(false)} />
    </div>
  )
}
