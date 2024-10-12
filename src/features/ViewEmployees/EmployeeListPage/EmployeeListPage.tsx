import styles from "./EmployeeListPage.module.scss";

import { EmployeeList, EmployeeSearchFilter } from "../widgets";

import { useSelector } from "react-redux";

import { RootState } from "../../../app/store";

const EmployeeListPage = () => {
  const employees = useSelector((state: RootState) => state.employes.employes);

  return (
    <div className={styles.employeeList}>
      <EmployeeSearchFilter />
      <EmployeeList
        employes={employees}
        onSelectEmployee={(id) => console.log(id)}
      />
    </div>
  );
};

export default EmployeeListPage;
