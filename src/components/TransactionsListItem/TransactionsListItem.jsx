import { format } from "date-fns"
import { useSelector } from "react-redux"
import clsx from "clsx"

import { selectCurrency } from "@/redux/user/slice"

import css from "./TransactionsListItem.module.css"
import EditIcon from "../../../src/assets/icons/EditPensil.svg?react"
import DeleteIcon from "../../../src/assets/icons/DeleteTrash.svg?react"
import { useWindowSize } from "@/hooks/useWindowSize"

const trim = text => {
  if (text.length > 12) {
    return `${text.slice(0, 9)}...`
  }

  return text
}

export const TransactionsListItem = ({ transaction }) => {
  const currency = useSelector(selectCurrency)
  const { windowSize } = useWindowSize()

  return (
    <tr>
      <td>
        {windowSize.innerWidth < 1440
          ? trim(transaction.category.categoryName)
          : transaction.category.categoryName}
      </td>
      <td>{trim(transaction.comment)}</td>
      <td>
        {windowSize.innerWidth < 1440
          ? trim(format(transaction.date, "EEEEEE, d.MM.yyyy"))
          : format(transaction.date, "EEEEEE, d.MM.yyyy")}
      </td>
      <td>
        {windowSize.innerWidth < 1440
          ? trim(transaction.time)
          : transaction.time}
      </td>
      <td>{`${transaction.sum} / ${currency.toUpperCase()}`}</td>
      <td>
        <button className={clsx(css.btn, css.btnAccent)}>
          <EditIcon className={css.pensilIcon} />
          {windowSize.innerWidth >= 1440 && "Edit"}
        </button>
        <button className={clsx(css.btn, css.btnDefault)}>
          <DeleteIcon className={css.trashIcon} />
          {windowSize.innerWidth >= 1440 && "Delete"}
        </button>
      </td>
    </tr>
  )
}
