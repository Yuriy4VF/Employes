import { EmployeeType } from "../../mockData/employes";
import styles from "./EmployeeListPage.module.scss";

import { useNavigate } from "react-router-dom";

import { Box, Typography, AppBar, Toolbar } from "@mui/material";
import { SimpleButton } from "../../shared/ui";
import { EmployeeList, EmployeeFilter } from "../../widgets";

const EmployeeListPage = () => {
  const navigate = useNavigate();

  const handleSelectEmployee = (employee: EmployeeType) => {
    const { id } = employee;
    navigate(`/employee/edit/${id}`, {
      state: { employee },
      replace: true,
    });
  };

  const handleCreateEmployee = () =>
    navigate("/employee/new", { replace: true });

  return (
    <Box className={styles.employeeList}>
      <Box className={styles.header}>
        <AppBar position="sticky">
          <Toolbar className={styles.toolbar}>
            <Typography variant="h6" className={styles.title}>
              Работа с сотрудниками
            </Typography>
            <SimpleButton onClick={handleCreateEmployee}>
              Добавить сотрудника
            </SimpleButton>
          </Toolbar>
        </AppBar>
        <EmployeeFilter />
      </Box>

      <EmployeeList onSelectEmployee={handleSelectEmployee} />
    </Box>
  );
};

export default EmployeeListPage;
