import { createSlice, isAnyOf } from "@reduxjs/toolkit"
import { loginThunk, logoutThunk } from "../auth/operations"
import {
  deleteUsersAvatarThunk,
  fetchUsersCurrentThunk,
  updateUsersAvatarThunk,
  updateUsersInfoThunk,
} from "./operations"

const initialState = {
  user: null,
  isLoading: false,
  error: null,
}

const slice = createSlice({
  name: "user",
  initialState,
  extraReducers: builder => {
    builder
      .addCase(loginThunk.fulfilled, (state, { payload: { user } }) => {
        state.user = user
      })
      .addCase(logoutThunk.fulfilled, () => initialState)
      .addCase(fetchUsersCurrentThunk.fulfilled, (state, { payload }) => {
        state.user = payload
      })
      .addCase(
        updateUsersInfoThunk.fulfilled,
        (state, { payload: { _id, name, currency } }) => {
          state.user._id = _id
          state.user.name = name
          state.user.currency = currency
        }
      )
      .addCase(updateUsersAvatarThunk.fulfilled, (state, { payload }) => {
        state.user.avatarUrl = payload
      })
      .addCase(deleteUsersAvatarThunk.fulfilled, state => {
        state.user.avatarUrl = null
      })
      .addMatcher(
        isAnyOf(
          fetchUsersCurrentThunk.pending,
          updateUsersInfoThunk.pending,
          updateUsersAvatarThunk.pending,
          deleteUsersAvatarThunk.pending
        ),
        state => {
          state.isLoading = true
        }
      )
      .addMatcher(
        isAnyOf(
          fetchUsersCurrentThunk.rejected,
          updateUsersInfoThunk.rejected,
          updateUsersAvatarThunk.rejected,
          deleteUsersAvatarThunk.rejected
        ),
        (state, { payload }) => {
          state.error = payload
        }
      )
  },
  selectors: {
    selectUser: state => state.user,
    selectIsLoading: state => state.isLoading,
    selectError: state => state.error,
  },
})

export const userReducer = slice.reducer

export const { selectUser, selectIsLoading, selectError } = slice.selectors
