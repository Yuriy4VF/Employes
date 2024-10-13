import { FC } from "react";

import { List, Paper } from "@mui/material";
import { EmployeeListProps } from "./EmployeeList.type";

import { EmployeeCard } from "../../shared/ui/EmployeeCard/EmployeeCard";

export const EmployeeList: FC<EmployeeListProps> = ({
  employes,
  onSelectEmployee,
}) => {
  return (
    <Paper elevation={3}>
      <List>
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
