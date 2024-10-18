import { EmployeeType } from "../../mockData/employes";
import styles from "./EmployeeCreatePage.module.scss";

import { employeeDefaultData } from "../../shared/defaultFormData/defaultFormData";

import { addEmployee } from "../../slices/employeeSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { EmployeeEditForm } from "../../widgets";

const EmployeeCreatePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCreateEmployee = (data: EmployeeType) => {
    dispatch(addEmployee(data));
    navigate("/employee", { replace: true });
  };

  return (
    <div className={styles.createPage}>
      <EmployeeEditForm
        edit={false}
        onSubmit={handleCreateEmployee}
        initialData={employeeDefaultData}
      />
    </div>
  );
};

export default EmployeeCreatePage;
