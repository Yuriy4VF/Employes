import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { EmployeeRoles } from "../mockData/employes";

export type FilterState = {
  name: string;
  role: EmployeeRoles;
  archiveStatus: boolean;
};

export type FilterQuery = FilterState["name"];
export type FilterParams = Omit<FilterState, "name">;

const initialState: FilterState = {
  name: "",
  role: EmployeeRoles.NO_ROLE,
  archiveStatus: false,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    changeQuery: (state, action: PayloadAction<FilterQuery>) => {
      console.log(action.payload);
      state.name = action.payload;
    },
    changeParams: (state, action: PayloadAction<FilterParams>) => {
      console.log(action.payload);
      state.archiveStatus = action.payload.archiveStatus;
      state.role = action.payload.role;
    },
  },
});

export const { changeQuery, changeParams } = filterSlice.actions;
export default filterSlice.reducer;
