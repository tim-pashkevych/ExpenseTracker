import { createSlice, isAnyOf } from "@reduxjs/toolkit"
import {
  loginThunk,
  logoutThunk,
  refreshThunk,
  registerThunk,
} from "./operations"

const initialState = {
  sid: null,
  accessToken: null,
  refreshToken: null,
  isLoggedIn: false,
  error: null,
  isLoading: false,
  isRefreshing: false,
}

const slice = createSlice({
  name: "auth",
  initialState,
  extraReducers: builder => {
    builder
      .addCase(
        loginThunk.fulfilled,
        (state, { payload: { sid, accessToken, refreshToken } }) => {
          state.sid = sid
          state.accessToken = accessToken
          state.refreshToken = refreshToken
          state.isLoggedIn = true
        }
      )
      .addCase(logoutThunk.fulfilled, () => initialState)
      .addCase(
        refreshThunk.fulfilled,
        (state, { payload: { sid, accessToken, refreshToken } }) => {
          state.sid = sid
          state.accessToken = accessToken
          state.refreshToken = refreshToken
          state.isRefreshing = false
        }
      )
      .addCase(refreshThunk.pending, state => {
        state.isRefreshing = true
      })
      .addCase(refreshThunk.rejected, state => {
        state.isRefreshing = false
      })

      .addMatcher(
        isAnyOf(
          registerThunk.pending,
          loginThunk.pending,
          logoutThunk.pending,
          refreshThunk.pending
        ),
        state => {
          state.isLoading = true
        }
      )
      .addMatcher(
        isAnyOf(
          registerThunk.fulfilled,
          loginThunk.fulfilled,
          logoutThunk.fulfilled,
          refreshThunk.fulfilled
        ),
        state => {
          state.isLoading = false
        }
      )
      .addMatcher(
        isAnyOf(
          loginThunk.rejected,
          registerThunk.rejected,
          logoutThunk.rejected,
          refreshThunk.rejected
        ),
        (state, { payload }) => {
          state.error = payload
          state.isLoading = false
        }
      )
  },
  selectors: {
    selectSid: state => state.sid,
    selectAccessToken: state => state.accessToken,
    selectRefreshToken: state => state.refreshToken,
    selectIsLoggedIn: state => state.isLoggedIn,
    selectError: state => state.error,
    selectIsLoading: state => state.isLoading,
    selectIsRefreshing: state => state.isRefreshing,
  },
})

export const authReducer = slice.reducer

export const {
  selectSid,
  selectAccessToken,
  selectRefreshToken,
  selectIsLoggedIn,
  selectError,
  selectIsLoading,
  selectIsRefreshing,
} = slice.selectors
