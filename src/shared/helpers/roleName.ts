import { EmployeeRoles } from "../../mockData/employes";

export type RenderRole = (role: EmployeeRoles) => string;

export const roleNames = {
  [EmployeeRoles.DRIVER]: "Водитель",
  [EmployeeRoles.WAITER]: "Официант",
  [EmployeeRoles.COOK]: "Повар",
  [EmployeeRoles.NO_ROLE]: "Без должности",
};

export const getRoleName: RenderRole = (role) => {
  return roleNames[role] || "Неизвестная роль";
};

export const roleNamesByFilter = {
  [EmployeeRoles.DRIVER]: "Водитель",
  [EmployeeRoles.WAITER]: "Официант",
  [EmployeeRoles.COOK]: "Повар",
  [EmployeeRoles.NO_ROLE]: "Все",
};

export const getRoleNameByFilter: RenderRole = (role) => {
  return roleNamesByFilter[role] || "Неизвестная роль";
};
