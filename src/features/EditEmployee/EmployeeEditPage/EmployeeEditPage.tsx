import { EmployeeEditForm } from "../../../widgets";
import styles from "./EmployeeEditPage.module.scss";

import { EmployeeFormData } from "../../../widgets/EmployeeEditForm/EmployeeEditForm.type";

const employee = {
  id: 1,
  name: "Илья Емельянов",
  isArchive: true,
  role: "driver",
  phone: "+7 (883) 508-3269",
  birthday: "12.02.1982",
};

export const EmployeeEditPage = () => {
  const saveHandler: (data: EmployeeFormData) => void = (data) =>
    console.log(data);

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
