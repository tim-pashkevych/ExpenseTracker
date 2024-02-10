import { Route, Routes } from "react-router-dom"
import { Layout, Loader } from "../components"
import { LoginPage, RegisterPage } from "../pages"
import { ROUTES } from "../constants"
import Expenses from "./ExpensesCategories"
import { PublicRoute } from "@/routes/PublicRoute"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { refreshThunk } from "@/redux/auth/operations"
import { selectIsLoading, selectRefreshToken } from "@/redux/auth/slice"
import { fetchTransactionsThunk } from "@/redux/transactions/operations"
import { selectTransactions } from "@/redux/transactions/slice"
const { HOME, SIGN_IN, SIGN_UP, TRANSACTION, HISTORY } = ROUTES

function App() {
  const dispatch = useDispatch()
  const expenses = useSelector(selectTransactions)
  const isLoading = useSelector(selectIsLoading)
  useEffect(() => {
    if (!isLoading) dispatch(fetchTransactionsThunk("expenses"))
  }, [dispatch, isLoading])

  return isLoading ? (
    <Loader />
  ) : (
    <Routes>
      <Route path={HOME} element={<Layout />}>
        <Route index element />
        <Route
          path={SIGN_IN}
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />
        <Route
          path={SIGN_UP}
          element={
            <PublicRoute>
              <RegisterPage />
            </PublicRoute>
          }
        />
        <Route path={`${TRANSACTION}/:transactionsType`} element />
        <Route path={`${TRANSACTION}/${HISTORY}/:transactionsType`} element />
        <Route path={`/exp`} element={<Expenses />} />
      </Route>
    </Routes>
  )
}

export default App
