import { EmployeeRolesEnum } from "../../mockData/employes";
import { getRoleName, getRoleNameByFilter } from "./roleName";

describe("Role Functions", () => {
  describe("getRoleName", () => {
    it("should return the correct role name for DRIVER", () => {
      expect(getRoleName(EmployeeRolesEnum.DRIVER)).toBe("Водитель");
    });

    it("should return the correct role name for WAITER", () => {
      expect(getRoleName(EmployeeRolesEnum.WAITER)).toBe("Официант");
    });

    it("should return the correct role name for COOK", () => {
      expect(getRoleName(EmployeeRolesEnum.COOK)).toBe("Повар");
    });

    it("should return the correct role name for NO_ROLE", () => {
      expect(getRoleName(EmployeeRolesEnum.NO_ROLE)).toBe("Без должности");
    });

    it("should return 'Неизвестная роль' for an unknown role", () => {
      expect(getRoleName("UNKNOWN_ROLE" as EmployeeRolesEnum)).toBe(
        "Неизвестная роль"
      );
    });
  });

  describe("getRoleNameByFilter", () => {
    it("should return the correct role name for DRIVER", () => {
      expect(getRoleNameByFilter(EmployeeRolesEnum.DRIVER)).toBe("Водитель");
    });

    it("should return the correct role name for WAITER", () => {
      expect(getRoleNameByFilter(EmployeeRolesEnum.WAITER)).toBe("Официант");
    });

    it("should return the correct role name for COOK", () => {
      expect(getRoleNameByFilter(EmployeeRolesEnum.COOK)).toBe("Повар");
    });

    it("should return 'Все' for NO_ROLE", () => {
      expect(getRoleNameByFilter(EmployeeRolesEnum.NO_ROLE)).toBe("Все");
    });

    it("should return 'Неизвестная роль' for an unknown role", () => {
      expect(getRoleNameByFilter("UNKNOWN_ROLE" as EmployeeRolesEnum)).toBe(
        "Неизвестная роль"
      );
    });
  });
});
