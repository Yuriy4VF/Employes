import { FC } from "react";
import styles from "./EmployeeList.module.scss";
import {
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  Paper,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { EmployeeListProps } from "../../types/EmployeeList.type";

const EmployeeList: FC<EmployeeListProps> = ({
  employes,
  onToggleArchive,
  onSelectEmployee,
}) => {
  return (
    <Paper elevation={3}>
      <List subheader={<ListSubheader>Список пользователей</ListSubheader>}>
        {employes.map((user) => (
          <ListItem
            key={user.id}
            className={styles.card}
            onClick={() => onSelectEmployee(user.id)}
          >
            <ListItemText
              primary={user.name}
              secondary={
                <div className={styles.details}>
                  <div>Роль: {user.role}</div>
                  <div>Телефон: {user.phone}</div>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={user.isArchive}
                        onChange={() => {
                          onToggleArchive(user.id);
                        }}
                      />
                    }
                    label="в архиве"
                  />
                </div>
              }
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default EmployeeList;
