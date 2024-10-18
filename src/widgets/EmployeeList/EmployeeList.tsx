import { FC } from "react";
import { EmployeeType } from "../../mockData/employes";
import { EmployeeListProps } from "./EmployeeList.type";

import { useSelector } from "react-redux";
import { selectFilteredEmployes } from "../../slices/selectors/getFilteredEmployee";

import { List, Paper } from "@mui/material";
import { EmployeeCard } from "../../shared/ui/EmployeeCard/EmployeeCard";

export const EmployeeList: FC<EmployeeListProps> = ({ onSelectEmployee }) => {
  const filteredEmployee = useSelector(selectFilteredEmployes);
  return (
    <Paper elevation={3}>
      <List>
        {filteredEmployee.map((employee: EmployeeType) => (
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
