import { EmployeeList } from "../../widgets";
import { EmployeeFilter } from "../../widgets";

import { useNavigate } from "react-router-dom";
import { Employee } from "../../mockData/employes";
import { SimpleButton } from "../../shared/ui";
import { Box, Typography, AppBar, Toolbar } from "@mui/material";
import styles from "./EmployeeListPage.module.scss";

const EmployeeListPage = () => {
  const navigate = useNavigate();

  const handleSelectEmployee = (employee: Employee) => {
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
          <Toolbar className={styles.Toolbar}>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
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
