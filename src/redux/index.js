import { configureStore } from "@reduxjs/toolkit"
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist"
import storage from "redux-persist/lib/storage"

import { authReducer } from "./auth/slice"
import { userReducer } from "./user/slice"
import { categoriesReducer } from "./category/slice"

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ["sid", "accessToken", "refreshToken"],
}

const persistedAuth = persistReducer(persistConfig, authReducer)

export const store = configureStore({
  reducer: {
    auth: persistedAuth,
    user: userReducer,
    categories: categoriesReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: import.meta.env.NODE_ENV !== "production",
})

export const persistor = persistStore(store)
