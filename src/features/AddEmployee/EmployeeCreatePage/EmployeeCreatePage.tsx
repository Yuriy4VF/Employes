import styles from "./EmployeeCreatePage.module.scss";

import { EmployeeEditForm } from "../../../widgets";

import { EmployeeFormData } from "../../../widgets/EmployeeEditForm/EmployeeEditForm.type";

const EmployeeCreatePage = () => {
  const saveHandler: (data: EmployeeFormData) => void = (data) =>
    console.log(data);

  const initialData = {
    name: "",
    isArchive: false,
    role: "",
    phone: "",
    birthday: "",
  };

  return (
    <div className={styles.createPage}>
      <EmployeeEditForm
        edit={false}
        onSubmit={saveHandler}
        initialData={initialData}
      />
    </div>
  );
};

export default EmployeeCreatePage;
