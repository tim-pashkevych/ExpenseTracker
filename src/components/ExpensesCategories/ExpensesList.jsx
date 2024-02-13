import React, { useRef } from "react"

import styles from "./styles/ExpensesList.module.css"
import { ExpensesItem } from "./ExpensesItem"
import { useScrollbar } from "../../hooks/ScrollbarHook"

export const ExpensesList = ({ data, colors }) => {
  const totalSum = data.reduce((acc, obj) => acc + obj.sum, 0)
  const getPersent = val => {
    return ((val / totalSum) * 100).toFixed(0)
  }
  const dataWrapper = useRef(null)
  const hasScroll = data.length > 4

  useScrollbar(dataWrapper, hasScroll)
  return (
    <div
      className={hasScroll ? styles.scrollbar : styles.noScrollbar}
      ref={dataWrapper}
    >
      <ul className={styles.list}>
        {data.map((item, index) => (
          <ExpensesItem
            key={item._id}
            category={item.categoryName}
            color={colors[index]}
            persent={getPersent(item.sum)}
          />
        ))}
      </ul>
    </div>
  )
}
