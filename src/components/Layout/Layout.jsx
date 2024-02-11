import { Outlet } from "react-router-dom"
import { Container, HeaderComponent, Loader } from "../index"
import { useSelector } from "react-redux"
import { selectIsLoading } from "@/redux/auth/slice"
// import { Outlet } from "react-router-dom";
import CurrencyType from "../../constants/CurrencyType"
import TransactionFormActionType from "../../constants/TransactionFormActionType"
import TransactionType from "../../constants/TransactionType"
import { CategoriesModal, Container, TransactionForm } from "../index"

export const Layout = () => {
  const isLoading = useSelector(selectIsLoading)

  return (
    <Container>
      <HeaderComponent />

      {isLoading ? <Loader /> : <Outlet />}
      {/* Header  */}
      {/* <Outlet /> */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "40px",
          alignItems: "center",
        }}
      >
        <TransactionForm
          actionType={TransactionFormActionType.Send}
          /* formData={{
            TransactionType: TransactionType.Income,
            Date: "2024-02-12",
            Time: "12:04",
            Category: "Movies",
            Sum: "130",
            Comment: "Avengers: EndGame",
          }} */
          currency={CurrencyType.EUR}
        />
      </div>
    </Container>
  )
}
