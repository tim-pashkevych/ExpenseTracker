import { configureStore } from "@reduxjs/toolkit"
import { authReducer } from "./auth/slice"
import { userReducer } from "./user/slice"

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
  },
  devTools: import.meta.env.NODE_ENV !== "production",
})
