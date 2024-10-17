import { EmployeeRoles } from "../../mockData/employes";

export const roleOptions: EmployeeRoles[] = [
  EmployeeRoles.DRIVER,
  EmployeeRoles.WAITER,
  EmployeeRoles.COOK,
  EmployeeRoles.NO_ROLE,
];

export type RoleOptions = typeof roleOptions;
