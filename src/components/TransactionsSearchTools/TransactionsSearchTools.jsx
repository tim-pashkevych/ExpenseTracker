import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { DatePickerFormField } from "../DatePickerFormField/DatePickerFormField"
import { format } from "date-fns"
import clsx from "clsx"

import css from "./TransactionsSearchTools.module.css"
import SearchIcon from "../../../src/assets/icons/Search.svg?react"
import CalendarAccentIcon from "../../../src/assets/icons/CalendarAccent.svg?react"

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
    <form
      autoComplete='off'
      className={clsx(css.flex, css.flexGap10, css.flexDirCol, css.padding20)}
    >
      <label className={css.fieldWrap}>
        <input
          type='text'
          value={categoryFilter}
          placeholder='Search for anything...'
          {...register("category")}
          onChange={onCategoryChange}
          className={clsx(css.inputField, css.inputSearchField)}
        />
        <SearchIcon className={css.fieldIconAddon} />
      </label>
      <DatePickerFormField
        onChange={onDateChange}
        value={dateFilter}
        className={css.inputField}
        placeholder='dd/mm/yyyy'
        icon={<CalendarAccentIcon className={css.fieldIconAddon} />}
      />
    </form>
  )
}
