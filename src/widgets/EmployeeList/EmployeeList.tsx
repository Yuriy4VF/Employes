import { FC } from "react";

import { List, ListSubheader, Paper, Typography } from "@mui/material";
import { EmployeeListProps } from "./EmployeeList.type";

import { EmployeeCard } from "../../shared/ui/EmployeeCard/EmployeeCard";

export const EmployeeList: FC<EmployeeListProps> = ({
  employes,
  onSelectEmployee,
}) => {
  return (
    <Paper elevation={3}>
      <List
        subheader={
          <ListSubheader>
            <Typography variant="h5" paddingTop={2} paddingBottom={2}>
              Список пользователей
            </Typography>
          </ListSubheader>
        }
      >
        {employes.map((employee) => (
          <EmployeeCard
            key={employee.id}
            employee={employee}
            onSelectEmployee={onSelectEmployee}
          />
        ))}
      </List>
    </Paper>
  );
};
