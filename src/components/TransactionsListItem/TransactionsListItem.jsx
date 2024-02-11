import { format } from "date-fns"
import { useSelector } from "react-redux"
import clsx from "clsx"

import { selectCurrency } from "@/redux/user/slice"

import css from "./TransactionsListItem.module.css"
import EditIcon from "../../../src/assets/icons/EditPensil.svg?react"
import DeleteIcon from "../../../src/assets/icons/DeleteTrash.svg?react"

const trim = text => {
  if (text.length > 10) {
    return `${text.slice(0, 7)}...`
  }

  return text
}

export const TransactionsListItem = ({ transaction }) => {
  const currency = useSelector(selectCurrency)

  return (
    <tr>
      <td>{trim(transaction.category.categoryName)}</td>
      <td>{trim(transaction.comment)}</td>
      <td>{trim(format(transaction.date, "EEEEEE, d.MM.yyyy"))}</td>
      <td>{trim(transaction.time)}</td>
      <td>{`${trim(transaction.sum)} / ${currency.toUpperCase()}`}</td>
      <td>
        <button className={clsx(css.btn, css.btnAccent)}>
          <EditIcon className={css.pensilIcon} />
        </button>
        <button className={clsx(css.btn, css.btnDefault)}>
          <DeleteIcon className={css.trashIcon} />
        </button>
      </td>
    </tr>
  )
}
