import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSlice from "../reducers/userSlice";
import { persistStore } from "redux-persist";
// import  from "redux-persist/lib/storage/session";
import persistReducer from "redux-persist/es/persistReducer";
import sessionStorage from "redux-persist/es/storage/session";

const reducers = combineReducers({ user: userSlice.reducer });

const persistConfig = {
  key: "info",
  storage: sessionStorage,
  whitelist: ["user"],
};

const rc = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: rc,
});

export const persistor = persistStore(store);
