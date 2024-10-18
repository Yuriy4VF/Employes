import { EmployeeRolesEnum } from "../../mockData/employes";

export const roleOptions: EmployeeRolesEnum[] = [
  EmployeeRolesEnum.DRIVER,
  EmployeeRolesEnum.WAITER,
  EmployeeRolesEnum.COOK,
  EmployeeRolesEnum.NO_ROLE,
];

export type RoleOptionsType = typeof roleOptions;
