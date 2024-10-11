import styles from "./EmployeeCreatePage.module.scss";

import { EmployeeEditForm } from "../../../widgets";

const EmployeeCreatePage = () => {
  const saveHandler = (data) => console.log(data);

  const initialData = {
    name: "",
    isArchive: false,
    role: "",
    phone: "",
    birthday: "",
  };

  return (
    <div className={styles.editPage}>
      <EmployeeEditForm
        edit={false}
        onSubmit={saveHandler}
        initialData={initialData}
      />
    </div>
  );
};

export default EmployeeCreatePage;
