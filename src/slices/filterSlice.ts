import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { EmployeeRolesEnum } from "../mockData/employes";

export type FilterState = {
  name: string;
  role: EmployeeRolesEnum;
  archiveStatus: boolean;
};

export type FilterQuery = FilterState["name"];
export type FilterStatus = FilterState["archiveStatus"];

const initialState: FilterState = {
  name: "",
  role: EmployeeRolesEnum.NO_ROLE,
  archiveStatus: false,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    changeQuery: (state, action: PayloadAction<FilterQuery>) => {
      state.name = action.payload;
    },

    changeStatus: (state, action: PayloadAction<FilterStatus>) => {
      console.log(typeof action.payload);
      state.archiveStatus = action.payload;
    },
    changeRole: (state, action: PayloadAction<EmployeeRolesEnum>) => {
      console.log(action.payload);
      state.role = action.payload;
    },
  },
});

export const { changeQuery, changeStatus, changeRole } = filterSlice.actions;
export default filterSlice.reducer;
