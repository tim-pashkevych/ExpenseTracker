import React from "react"
import styles from "./styles/ExpensesItem.module.css"

export const ExpensesItem = ({ category, color, persent }) => {
  return (
    <li className={styles.item}>
      <span
        className={styles.colorDot}
        style={{ backgroundColor: color }}
      ></span>
      <p className={styles.text}>{category}</p>
      <span className={styles.persent}>{persent}%</span>
    </li>
  )
}
