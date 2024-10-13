import { FC } from "react";
import { Employee, EmployeeRoles } from "../../../mockData/employes";
import styles from "./EmployeeCard.module.scss";
import {
  ListItem,
  ListItemText,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

interface EmployeeCardProps {
  employee: Employee;
  onSelectEmployee: (id: Employee) => void;
}

const roleNames = {
  [EmployeeRoles.DRIVER]: "Водитель",
  [EmployeeRoles.WAITER]: "Официант",
  [EmployeeRoles.COOK]: "Повар",
  [EmployeeRoles.NO_ROLE]: "Без роли",
};

const getRoleName = (role: EmployeeRoles) => {
  return roleNames[role] || "Неизвестная роль";
};

export const EmployeeCard: FC<EmployeeCardProps> = ({
  employee,
  onSelectEmployee,
}) => {
  const { isArchive, role, name, phone } = employee;
  const className = isArchive
    ? `${styles.card} ${styles.archive}`
    : styles.card;

  return (
    <ListItem className={className} onClick={() => onSelectEmployee(employee)}>
      <ListItemText
        primary={name}
        secondary={
          <div className={styles.details}>
            <div>Должность: {getRoleName(role)}</div>
            <div>Телефон: {phone}</div>
            <FormControlLabel
              className={styles["no-pointer"]}
              control={<Checkbox checked={isArchive} />}
              label={"в архиве"}
              labelPlacement="start"
            />
          </div>
        }
      />
    </ListItem>
  );
};
