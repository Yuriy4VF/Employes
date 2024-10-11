import styles from "./EmployeeListPage.module.scss";

import { useState } from "react";

import { EmployeeList, EmployeeSearchFilter } from "../widgets";
import { employes as employesList } from "../../../mockData/employes";

const EmployeeListPage = () => {
  const [employes, setEmployes] = useState([...employesList]);

  const toggleArchive = (id: number) => {
    console.log(id);
    setEmployes((prevEmployes) =>
      prevEmployes.map((user) =>
        user.id === id ? { ...user, isArchived: !user.isArchive } : user
      )
    );
  };
  const selectEmployee = (id: number) => {
    const selectedEmployee = employes.find((user) => user.id === id);
    console.log("Selected Employee:", selectedEmployee);
  };
  return (
    <div className={styles.employeeList}>
      <h1>Список сотрудников</h1>
      <EmployeeSearchFilter />
      <EmployeeList
        employes={employes}
        onSelectEmployee={selectEmployee}
        onToggleArchive={toggleArchive}
      />
    </div>
  );
};

export default EmployeeListPage;
