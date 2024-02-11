import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { DatePickerFormField } from "../DatePickerFormField/DatePickerFormField"
import { format } from "date-fns"

import {
  selectFiltersCategory,
  selectFiltersDate,
} from "@/redux/transactionsFilters/selectors"
import {
  changeFilterCategory,
  changeFilterDate,
} from "@/redux/transactionsFilters/slice"

export const TransactionsSearchTools = () => {
  const { register } = useForm()
  const dispatch = useDispatch()
  const categoryFilter = useSelector(selectFiltersCategory)
  const dateFilter = useSelector(selectFiltersDate)

  const onCategoryChange = ({ target }) => {
    dispatch(changeFilterCategory(target.value))
  }

  const onDateChange = date => {
    dispatch(changeFilterDate(format(date, "yyyy-MM-dd")))
  }

  return (
    <form>
      <input
        type='text'
        value={categoryFilter}
        {...register("category")}
        onChange={onCategoryChange}
      />
      <DatePickerFormField onChange={onDateChange} value={dateFilter} />
    </form>
  )
}
