import { useParams } from "react-router-dom"
import {
  TransactionsList,
  TransactionsSearchTools,
  WidgetContainer,
} from "../../components"

import styles from "./TarnsactionsHistoryPage.module.css"

export const TarnsactionsHistoryPage = () => {
  const { transactionsType } = useParams()

  return (
    <>
      <h1 className={styles.pageTitle}>
        {transactionsType === "expenses" ? "All Expense" : "All Income"}
      </h1>
      <p className={styles.pageParagraph}>
        {transactionsType === "expenses"
          ? "View and manage every transaction seamlessly! Your entire financial landscape, all in one place."
          : "Track and celebrate every bit of earnings effortlessly! Gain insights into your total revenue in a snap."}
      </p>

      <WidgetContainer>
        <TransactionsSearchTools />
        <TransactionsList />
      </WidgetContainer>
    </>
  )
}
