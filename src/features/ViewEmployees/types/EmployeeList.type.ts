import { Employee } from "../../../mockData/employes";

export interface EmployeeListProps {
  employes: Employee[];
  onSelectEmployee: (id: string) => void;
}
