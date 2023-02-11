// first step
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import cart from "./cartSlice";
// second step create reducers and combine them
const reducers = combineReducers({ cart })
// third step create configuration object for the reducers
const config = {
  key: "root",
  storage: storage
}
// forth step create persistreducer
const reducer = persistReducer(config, reducers)
// create our store
const store = configureStore({
  reducer: reducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk]
})
export default store
// close this page and go to app.js 