import AsyncStorage from "@react-native-async-storage/async-storage"
import { createStore, applyMiddleware, compose } from "redux"
import thunkMiddleware from "redux-thunk"
import { persistStore, persistReducer } from "redux-persist"

import rootReducer from "./reducers"

const persistConfig = {
  key: "v1",
  storage: AsyncStorage,
  blacklist: ["productListFilters", "tokens", "realTimeChat"]
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(
  persistedReducer,
  compose(
    applyMiddleware(thunkMiddleware)
  )
)

export const persistor = persistStore(store)