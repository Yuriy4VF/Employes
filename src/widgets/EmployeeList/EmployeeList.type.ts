import { Employee } from "../../mockData/employes";

export interface EmployeeListProps {
  onSelectEmployee: (employee: Employee) => void;
}
