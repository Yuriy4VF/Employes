import { EmployeeEditForm } from "../../../widgets";
import styles from "./EmployeeEditPage.module.scss";

const employee = {
  id: 1,
  name: "Илья Емельянов",
  isArchive: true,
  role: "driver",
  phone: "+7 (883) 508-3269",
  birthday: "12.02.1982",
};

export const EmployeeEditPage = () => {
  const saveHandler = (data) => console.log(data);

  return (
    <div className={styles.editPage}>
      <EmployeeEditForm
        edit={true}
        onSubmit={saveHandler}
        initialData={employee}
      />
    </div>
  );
};
