import { createAsyncThunk } from "@reduxjs/toolkit"
import { api, setToken, clearToken } from "../../axiosConfig/expenseTrackerApi"

export const createCategotyThunk = createAsyncThunk(
  "create a category",
  async ({ accessToken, reqData }, thunkAPI) => {
    try {
      setToken(accessToken)
      const { data } = await api.post("/categories", reqData)
      clearToken()
      return data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  }
)

export const fetchCategoriesThunk = createAsyncThunk(
  "get categories",
  async (accessToken, thunkAPI) => {
    try {
      setToken(accessToken)
      const { data } = await api.get("/categories")
      clearToken()
      return data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  }
)

export const updateCategoryThunk = createAsyncThunk(
  "update a category",
  async ({ reqData, id, accessToken }, thunkAPI) => {
    try {
      setToken(accessToken)
      const { data } = await api.patch(`/categories/${id}`, reqData)
      clearToken()
      return data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  }
)

export const deleteCategoryThunk = createAsyncThunk(
  "delete a category",
  async ({ id, accessToken }, thunkAPI) => {
    try {
      setToken(accessToken)
      await api.delete(`/categories/${id}`)
      clearToken()
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  }
)
