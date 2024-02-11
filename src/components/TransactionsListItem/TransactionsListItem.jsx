import { format } from "date-fns"

export const TransactionsListItem = ({ transaction }) => {
  return (
    <tr>
      <td>{transaction.category.categoryName}</td>
      <td>{transaction.comment}</td>
      <td>{format(transaction.date, "EEEEEE, d/MM/yyyy")}</td>
      <td>{transaction.time}</td>
      <td>{transaction.sum}</td>
      <td>
        <button>Edit</button> <button>Delete</button>
      </td>
    </tr>
  )
}
