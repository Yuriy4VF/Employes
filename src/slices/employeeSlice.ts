import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { EmployeeFormData } from "../widgets/EmployeeEditForm/EmployeeEditForm.type";

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
    addEmployee: (state, action: PayloadAction<EmployeeFormData>) => {
      state.employes.push({ ...action.payload, id: Date.now() });
    },
    removeEmployee: (state, action: PayloadAction<number>) => {
      state.employes = state.employes.filter(
        (emp) => emp.id !== action.payload
      );
    },
    updateEmployee: (state, action: PayloadAction<Employee>) => {
      const index = state.employes.findIndex(
        (emp) => emp.id === action.payload.id
      );
      if (index !== -1) {
        state.employes[index] = action.payload;
      }
    },
    toggleEmployee: (state, action: PayloadAction<number>) => {
      const index = state.employes.findIndex(
        (emp) => emp.id === action.payload
      );
      if (index !== -1) {
        state.employes[index].isArchive = !state.employes[index].isArchive;
      }
    },
  },
});

export const { addEmployee, removeEmployee, updateEmployee, toggleEmployee } =
  employeeSlice.actions;

export default employeeSlice.reducer;
