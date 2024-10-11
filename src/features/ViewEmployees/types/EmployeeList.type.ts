import { Employee } from "../../../mockData/employes";

export interface EmployeeListProps {
  employes: Employee[];
  onToggleArchive: (id: number) => void; // Функция для изменения статуса архива
  onSelectEmployee: (id: number) => void; // Функция для выбора работника
}
