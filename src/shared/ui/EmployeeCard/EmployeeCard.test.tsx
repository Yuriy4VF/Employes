import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { EmployeeCard } from "./EmployeeCard";

import { EmployeeRolesEnum } from "../../../mockData/employes";
import { getRoleName } from "../../helpers/roleName";

const mockEmployees = [
  {
    birthday: "12.11.2020",
    isArchive: false,
    role: EmployeeRolesEnum.DRIVER,
    name: "John Doe",
    phone: "123-456-7890",
  },
  {
    birthday: "01.01.1990",
    isArchive: false,
    role: EmployeeRolesEnum.WAITER,
    name: "Jane Smith",
    phone: "098-765-4321",
  },
  {
    birthday: "05.05.1985",
    isArchive: false,
    role: EmployeeRolesEnum.COOK,
    name: "Alice Johnson",
    phone: "555-555-5555",
  },
];

const onSelectEmployeeMock = jest.fn();

describe("EmployeeCard with different roles", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  mockEmployees.forEach((employee) => {
    test(`renders employee card for role: ${getRoleName(
      employee.role
    )}`, () => {
      render(
        <EmployeeCard
          employee={employee}
          onSelectEmployee={onSelectEmployeeMock}
        />
      );

      expect(
        screen.getByText(new RegExp(employee.name, "i"))
      ).toBeInTheDocument();
      expect(
        screen.getByText(
          new RegExp(`Должность: ${getRoleName(employee.role)}`, "i")
        )
      ).toBeInTheDocument();
      expect(
        screen.getByText(new RegExp(`Телефон: ${employee.phone}`, "i"))
      ).toBeInTheDocument();
      expect(screen.getByLabelText(/в архиве/i)).not.toBeChecked();
    });

    test(`calls onSelectEmployee when card for ${employee.name} is clicked`, () => {
      render(
        <EmployeeCard
          employee={employee}
          onSelectEmployee={onSelectEmployeeMock}
        />
      );

      fireEvent.click(screen.getByRole("listitem"));

      expect(onSelectEmployeeMock).toHaveBeenCalledTimes(1);
      expect(onSelectEmployeeMock).toHaveBeenCalledWith(employee);
    });
  });
});
