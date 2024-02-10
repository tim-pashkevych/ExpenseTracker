import { createAsyncThunk } from "@reduxjs/toolkit"
import { api, setToken, clearToken } from "../../axiosConfig/expenseTrackerApi"

export const createTransactionThunk = createAsyncThunk(
  "create a transaction",
  async ({ accessToken, reqData }, thunkAPI) => {
    try {
      setToken(accessToken)
      const { data } = await api.post("/transactions", reqData)
      clearToken()
      return data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  }
)

export const fetchTransactionsThunk = createAsyncThunk(
  "get transactions",
  async ({ accessToken, type }, thunkAPI) => {
    try {
      setToken(accessToken)
      const { data } = await api.get(`/transactions/${type}`)
      clearToken()
      return data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  }
)

export const updateTransactionThunk = createAsyncThunk(
  "update a transaction",
  async ({ reqData, id, accessToken, type }, thunkAPI) => {
    try {
      setToken(accessToken)
      const { data } = await api.patch(`/transactions/${type}/${id}`, reqData)
      clearToken()
      return data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  }
)

export const deleteTransactionThunk = createAsyncThunk(
  "delete a transaction",
  async ({ id, accessToken }, thunkAPI) => {
    try {
      setToken(accessToken)
      await api.delete(`/transactions/${id}`)
      clearToken()
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  }
)
