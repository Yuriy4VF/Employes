import { Employee } from "../../mockData/employes";

export interface EmployeeEditFormProps {
  edit: boolean;
  initialData: Employee;
  onSubmit: (data: Employee) => void;
}
