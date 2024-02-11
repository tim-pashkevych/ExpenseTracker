import { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import {
  selectFilteredTransactions,
  selectFiltersDate,
} from "@/redux/transactionsFilters/selectors"
import { fetchTransactionsThunk } from "@/redux/transactions/operations"
import { TransactionsListItem } from "../TransactionsListItem/TransactionsListItem"

import css from "./TransactionsList.module.css"

export const TransactionsList = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { transactionsType } = useParams()
  const transactions = useSelector(selectFilteredTransactions)
  const date = useSelector(selectFiltersDate)

  useEffect(() => {
    if (transactionsType !== "expenses" && transactionsType !== "incomes") {
      navigate("/", { replace: true })
    } else {
      dispatch(fetchTransactionsThunk({ type: transactionsType, date }))
    }
  }, [dispatch, navigate, transactionsType, date])

  return (
    <div className={css.TransactionsListWrap}>
      <table className={css.transactionsList}>
        <thead className={css.transactionsListHeader}>
          <tr>
            <th>Category</th>
            <th>Comment</th>
            <th>Date</th>
            <th>Time</th>
            <th>Sum</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className={css.transactionsListBody}>
          {transactions.map(transaction => (
            <TransactionsListItem
              key={transaction._id}
              transaction={transaction}
            />
          ))}
        </tbody>
      </table>
    </div>
  )
}
