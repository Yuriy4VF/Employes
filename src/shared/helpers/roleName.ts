import { EmployeeRoles } from "../../mockData/employes";

export const roleNames = {
  [EmployeeRoles.DRIVER]: "Водитель",
  [EmployeeRoles.WAITER]: "Официант",
  [EmployeeRoles.COOK]: "Повар",
  [EmployeeRoles.NO_ROLE]: "Без должности",
};

export const getRoleName = (role: EmployeeRoles) => {
  return roleNames[role] || "Неизвестная роль";
};
