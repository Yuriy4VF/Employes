import { EmployeeType } from "../../mockData/employes";

export interface EmployeeListProps {
  onSelectEmployee: (employee: EmployeeType) => void;
}
