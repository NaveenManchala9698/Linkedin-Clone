import { configureStore } from "@reduxjs/toolkit";
import localStorage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import { encryptTransform } from "redux-persist-transform-encrypt";
import experienceReducer from "../reducers/experience";

const persistConfig = {
  key: "root",
  storage: localStorage,
  transforms: [
    encryptTransform({
      secretKey: "Naveen9698",
    }),
  ],
};
const mainReducer = experienceReducer;

const persistedReducer = persistReducer(persistConfig, mainReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

export default store;
