import styles from "./EmployeeListPage.module.scss";

import EmployeeSearchFilter from "../../widgets/EmployeeSearchFilter";
import EmployeeList from "../../widgets/EmployeeList";

const EmployeeListPage = () => {
  return (
    <div className={styles.employeeList}>
      <h1>Список сотрудников</h1>
      <EmployeeSearchFilter />
      <EmployeeList />
    </div>
  );
};

export default EmployeeListPage;
