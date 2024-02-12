import React from "react"
import styles from "./TransactionHistoryNav.module.css"
import { Link } from "react-router-dom"

export const TransactionHistoryNav = () => {
  return (
    <div className={styles.wrapperNavigate}>
      <ul className={styles.listNavigate}>
        <li>
          <Link
            className={styles.linkStyleNav}
            to={"/transactions/history/expenses"}
          >
            All Expense
          </Link>
        </li>
        <li>
          <Link
            className={styles.linkStyleNav}
            to={"/transactions/history/incomes"}
          >
            All Income
          </Link>
        </li>
      </ul>
    </div>
  )
}
