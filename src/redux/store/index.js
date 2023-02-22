import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import localStorage from "redux-persist/lib/storage"; // default value: localStorage
// import { encryptTransform } from "redux-persist-transform-encrypt";
import fetchProfileReducer from "../reducers/fetchProfileReducer";
import allProfilesReducer from "../reducers/allProfilesReducer";
import experienceReducer from "../reducers/experienceReducer";
import bioReducer from "../reducers/bioReducer";
import postReducer from "../reducers/postReducer";

const persistConfig = {
  storage: localStorage,
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
  bioReducer,
});

const persistedReducer = persistReducer(persistConfig, combinedReducer);

const store = configureStore({
  reducer: persistedReducer, // ...giving back to reducer a single function once again
  // we're telling Redux which reducer function to use!
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
      // this shuts off the checking of non-serializable values in actions
    });
  },
});

const persistedStore = persistStore(store);

export { store, persistedStore };
