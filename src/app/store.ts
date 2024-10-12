import { configureStore } from "@reduxjs/toolkit";

import employeeReducer from "../slices/employeeSlice";

const store = configureStore({
  reducer: { employes: employeeReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
