import { combineReducers, configureStore } from "@reduxjs/toolkit";
import profileReducer from "../reducers/profileReducer";

const store = configureStore({
  reducer: combineReducers({
    profileReducer,
  }),
});

export default store;
