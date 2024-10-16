import { createSelector } from "reselect";
import { RootState } from "../../app/store";
import { EmployeeRoles } from "../../mockData/employes";

const selectEmployee = (state: RootState) => state.employes.employes;
const selectRole = (state: RootState) => state.filter.role;
const selectStatus = (state: RootState) => state.filter.archiveStatus;
const selectQuery = (state: RootState) => state.filter.name;

export const selectFilteredEmployes = createSelector(
  [selectEmployee, selectRole, selectStatus, selectQuery],
  (employes, role, archiveStatus, query) => {
    return employes.filter((employee) => {
      const matchesRole =
        role === EmployeeRoles.NO_ROLE || employee.role === role;
      const matchesStatus =
        archiveStatus !== undefined
          ? employee.isArchive === archiveStatus
          : true;
      const matchesQuery = query
        ? employee.name.toLowerCase().includes(query.toLowerCase())
        : true;

      return matchesRole && matchesStatus && matchesQuery;
    });
  }
);
