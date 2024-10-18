import { FC } from "react";
import { EmployeeType } from "../../../mockData/employes";

import styles from "./EmployeeCard.module.scss";

import {
  ListItem,
  FormControlLabel,
  Checkbox,
  Box,
  Typography,
} from "@mui/material";

import { getRoleName } from "../../helpers/roleName";
interface EmployeeCardProps {
  employee: EmployeeType;
  onSelectEmployee: (employee: EmployeeType) => void;
}

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
      <Box className={styles["card-box"]}>
        <Typography variant="h6" className={styles.name}>
          {name}{" "}
        </Typography>
        <Box display="flex" alignItems="center" className={styles.details}>
          <Typography className={styles.role}>
            Должность: {getRoleName(role)}
          </Typography>
          <Typography className={styles.phone}>Телефон: {phone}</Typography>

          <FormControlLabel
            className={styles.checkbox}
            control={<Checkbox checked={isArchive} />}
            label={"в архиве"}
            labelPlacement="end"
          />
        </Box>
      </Box>
    </ListItem>
  );
};
