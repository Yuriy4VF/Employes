import styles from "./EmployeeListPage.module.scss";
import { EmployeeList, EmployeeSearchFilter } from "../../widgets";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { useNavigate } from "react-router-dom";
import { Employee } from "../../mockData/employes";

const EmployeeListPage = () => {
  const employees = useSelector((state: RootState) => state.employes.employes);
  const navigate = useNavigate();

  const handleSelectEmployee = (employee: Employee) => {
    const { id } = employee;
    navigate(`/employee/edit/${id}`, { state: { employee } });
  };

  return (
    <div className={styles.employeeList}>
      <EmployeeSearchFilter />
      <EmployeeList
        employes={employees}
        onSelectEmployee={handleSelectEmployee}
      />
    </div>
  );
};

export default EmployeeListPage;
