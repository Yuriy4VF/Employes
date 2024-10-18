import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { EmployeeType, employes } from "../mockData/employes";
import { generateId } from "../shared/helpers/generateId";

export interface EmployeeState {
  employes: EmployeeType[];
}

const initialState: EmployeeState = {
  employes: employes,
};

const employeeSlice = createSlice({
  name: "employes",
  initialState,
  reducers: {
    addEmployee: (state, action: PayloadAction<EmployeeType>) => {
      state.employes.push({ ...action.payload, id: generateId() });
    },

    updateEmployee: (state, action: PayloadAction<EmployeeType>) => {
      const { id, ...updatedData } = action.payload;
      const index = state.employes.findIndex((emp) => emp.id === id);
      if (index !== -1) {
        state.employes[index] = { ...state.employes[index], ...updatedData };
      }
    },
  },
});

export const { addEmployee, updateEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;
