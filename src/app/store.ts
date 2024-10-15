import { configureStore } from "@reduxjs/toolkit";

import employeeReducer from "../slices/employeeSlice";
import filterReducer from "../slices/filterSlice";

const store = configureStore({
  reducer: { employes: employeeReducer, filter: filterReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
