import {
  Container,
  TransactionsList,
  TransactionsSearchTools,
  WidgetContainer,
} from "../../components"

const TarnsactionsHistoryPage = () => {
  return (
    <WidgetContainer>
      <TransactionsSearchTools />
      <TransactionsList />
    </WidgetContainer>
  )
}

export default TarnsactionsHistoryPage
