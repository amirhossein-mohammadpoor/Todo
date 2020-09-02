import { createStore, applyMiddleware } from "redux"
import logger from "redux-logger"
import thunk from "redux-thunk"
import reducer from "./rootReducer"

const middlewares = [thunk, logger]

export default createStore(
  reducer,
  applyMiddleware(...middlewares)
)