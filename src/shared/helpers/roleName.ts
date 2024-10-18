import { EmployeeRolesEnum } from "../../mockData/employes";

export type RenderRoleType = (role: EmployeeRolesEnum) => string;

export const roleNames = {
  [EmployeeRolesEnum.DRIVER]: "Водитель",
  [EmployeeRolesEnum.WAITER]: "Официант",
  [EmployeeRolesEnum.COOK]: "Повар",
  [EmployeeRolesEnum.NO_ROLE]: "Без должности",
};

export const roleNamesByFilter = {
  [EmployeeRolesEnum.DRIVER]: "Водитель",
  [EmployeeRolesEnum.WAITER]: "Официант",
  [EmployeeRolesEnum.COOK]: "Повар",
  [EmployeeRolesEnum.NO_ROLE]: "Все",
};

export const getRoleName: RenderRoleType = (role) => {
  return roleNames[role] || "Неизвестная роль";
};

export const getRoleNameByFilter: RenderRoleType = (role) => {
  return roleNamesByFilter[role] || "Неизвестная роль";
};
