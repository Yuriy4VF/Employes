import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Employee, employes } from "../mockData/employes";

export interface EmployeeState {
  employes: Employee[];
}

const initialState: EmployeeState = {
  employes: employes,
};

const employeeSlice = createSlice({
  name: "employes",
  initialState,
  reducers: {
    addEmployee: (state, action: PayloadAction<Employee>) => {
      state.employes.push({ ...action.payload, id: String(Date.now()) });
    },

    updateEmployee: (state, action: PayloadAction<Employee>) => {
      console.log(action.payload);
      const index = state.employes.findIndex(
        (emp) => emp.id === action.payload.id
      );
      if (index !== -1) {
        state.employes[index] = action.payload;
      }
    },
  },
});

export const { addEmployee, updateEmployee } = employeeSlice.actions;

export default employeeSlice.reducer;
