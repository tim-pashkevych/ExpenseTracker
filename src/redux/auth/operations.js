import { createAsyncThunk } from "@reduxjs/toolkit";
import { api, setToken, clearToken } from "../../axiosConfig/expenseTrackerApi";
import { fetchUserThunk } from "../user/operations";

export const registerThunk = createAsyncThunk(
  "register",
  async (credentials, thunkAPI) => {
    try {
      await api.post("/auth/register", credentials);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginThunk = createAsyncThunk(
  "login",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await api.post("/auth/login", credentials);
      setToken(data.accessToken);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logoutThunk = createAsyncThunk("logout", async (sid, thunkAPI) => {
  try {
    await api.get("/auth/logout", { sid });
    clearToken();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshThunk = createAsyncThunk("refresh", async (_, thunkAPI) => {
  const refreshToken = thunkAPI.getState().auth.refreshToken;
  const sid = thunkAPI.getState().auth.sid;
  if (!refreshToken) {
    return thunkAPI.rejectWithValue("Token is not exist");
  }

  try {
    setToken(refreshToken);
    const { data } = await api.post("/auth/refresh", { sid });
    setToken(data.accessToken);
    thunkAPI.dispatch(fetchUserThunk);

    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
