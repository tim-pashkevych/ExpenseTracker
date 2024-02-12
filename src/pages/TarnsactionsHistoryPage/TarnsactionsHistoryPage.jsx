import {
  TransactionsList,
  TransactionsSearchTools,
  WidgetContainer,
} from "../../components"

export const TarnsactionsHistoryPage = () => {
  return (
    <WidgetContainer>
      <TransactionsSearchTools />
      <TransactionsList />
    </WidgetContainer>
  )
}

