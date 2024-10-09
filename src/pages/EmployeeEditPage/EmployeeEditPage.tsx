import EmployeeEditForm from "../../widgets/EmployeeEditForm";
import styles from "./EmployeeEditPage.module.scss";

const EmployeeEditPage = () => {
  return (
    <div className={styles.editPage}>
      <EmployeeEditForm />
    </div>
  );
};

export default EmployeeEditPage;
