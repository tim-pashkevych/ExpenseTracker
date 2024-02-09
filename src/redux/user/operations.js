import { createAsyncThunk } from "@reduxjs/toolkit"
import { api, setToken, clearToken } from "../../axiosConfig/expenseTrackerApi"

export const fetchUserThunk = createAsyncThunk(
  "get user",
  async (accessToken, thunkAPI) => {
    try {
      setToken(accessToken)
      const { data } = await api.get("/users/current")
      clearToken()
      return data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  }
)

export const updateUsersInfoThunk = createAsyncThunk(
  "update user",
  async ({ accessToken, reqData }, thunkAPI) => {
    try {
      setToken(accessToken)
      const { data } = await api.patch("/users/info", reqData)
      clearToken()
      return data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  }
)

export const updateUsersAvatarThunk = createAsyncThunk(
  "update users avatar",
  async ({ avatar, accessToken }, thunkAPI) => {
    try {
      const formData = new FormData()
      formData.append("avatar", avatar)

      setToken(accessToken)
      const { data } = await api.patch("/users/avatar", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      clearToken()
      return data.avatarUrl
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  }
)

export const deleteUsersAvatarThunk = createAsyncThunk(
  "delete users avatar",
  async ({ avatarId, accessToken }, thunkAPI) => {
    try {
      setToken(accessToken)
      await api.delete(`/users/avatar/${avatarId}`)
      clearToken()
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  }
)
