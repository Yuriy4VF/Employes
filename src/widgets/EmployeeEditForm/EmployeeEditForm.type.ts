import { EmployeeType } from "../../mockData/employes";

export interface EmployeeEditFormProps {
  edit: boolean;
  initialData: EmployeeType;
  onSubmit: (data: EmployeeType) => void;
}
