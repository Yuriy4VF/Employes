import styles from "./EmployeeEditPage.module.scss";

import { employeeDefaultData } from "../../shared/defaultFormData/defaultFormData";
import { updateEmployee } from "../../slices/employeeSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

import { EmployeeEditForm } from "../../widgets";
import { Employee } from "../../mockData/employes";

export const EmployeeEditPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const employeeData = location.state?.employee || employeeDefaultData;

  const handleUpdateEmployee = (data: Employee) => {
    dispatch(updateEmployee(data));
    navigate("/employee", { replace: true });
  };

  return (
    <div className={styles.editPage}>
      <EmployeeEditForm
        edit={true}
        onSubmit={handleUpdateEmployee}
        initialData={employeeData}
      />
    </div>
  );
};
