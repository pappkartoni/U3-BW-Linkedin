import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import fetchProfileReducer from "../reducers/fetchProfileReducer";
import allProfilesReducer from "../reducers/allProfilesReducer";
import experienceReducer from "../reducers/experienceReducer";
import bioReducer from "../reducers/bioReducer";
import postReducer from "../reducers/postReducer";
import sessionStorage from "redux-persist/es/storage/session";

const persistConfig = {
  storage: sessionStorage,
  key: "root", // this brings the whole redux store into persistency
  // transforms: [
  //   encryptTransform({
  //     secretKey: process.env.REACT_APP_ENV_SECRET_SUPER_SP0TYFY_KEY_SECOND2,
  //   }),
  // ],
};
const combinedReducer = combineReducers({
  getProfile: fetchProfileReducer,
  allProfiles: allProfilesReducer,
  exp: experienceReducer,
  posts: postReducer,
  bioReducer
});

const persistedReducer = persistReducer(persistConfig, combinedReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      immutableCheck: { warnAfter: 128 },
      serializableCheck: false,
    });
  },
});

const persistedStore = persistStore(store);

export { store, persistedStore };
