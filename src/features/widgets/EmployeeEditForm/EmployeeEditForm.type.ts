export interface EmployeeFormData {
  name: string;
  phone: string;
  birthday: string;
  role: string;
  isArchive: boolean;
}

export interface EmployeeEditFormProps {
  edit: boolean;
  initialData: EmployeeFormData;
  onSubmit: (data: EmployeeFormData) => void;
}
