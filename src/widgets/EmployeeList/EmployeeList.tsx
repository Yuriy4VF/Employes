import { FC } from "react";

import { List, Paper } from "@mui/material";
import { EmployeeListProps } from "./EmployeeList.type";

import { EmployeeCard } from "../../shared/ui/EmployeeCard/EmployeeCard";
import { useSelector } from "react-redux";
import { selectFilteredEmployes } from "../../slices/selectors/getFilteredEmployee";

export const EmployeeList: FC<EmployeeListProps> = ({ onSelectEmployee }) => {
  const filteredEmployee = useSelector(selectFilteredEmployes);
  return (
    <Paper elevation={3}>
      <List>
        {filteredEmployee.map((employee) => (
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
