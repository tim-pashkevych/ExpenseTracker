import { createAsyncThunk } from "@reduxjs/toolkit"
import { api, setToken, clearToken } from "../../axiosConfig/expenseTrackerApi"

export const registerThunk = createAsyncThunk(
  "register",
  async (credentials, thunkAPI) => {
    try {
      await api.post("/auth/register", credentials)
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  }
)

export const loginThunk = createAsyncThunk(
  "login",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await api.post("/auth/login", credentials)
      return data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  }
)

export const logoutThunk = createAsyncThunk(
  "logout",
  async ({ sid, accessToken }, thunkAPI) => {
    try {
      setToken(accessToken)
      await api.get("/auth/logout", { sid })
      clearToken()
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  }
)

export const refreshThunk = createAsyncThunk(
  "refresh",
  async ({ sid, refreshToken }, thunkAPI) => {
    try {
      setToken(refreshToken)
      const { data } = await api.post("/auth/refresh", { sid })
      clearToken()
      return data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  }
)
