import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";

import { setLocalStorage } from "@utils/localStorage";

const store = configureStore({ reducer: rootReducer });

store.subscribe(() => {
  setLocalStorage("store", store.getState().favoriteReducer);
  store.getState();
});

export default store;
