import styles from "./EmployeeFilter.module.scss";
import {
  TextField,
  Checkbox,
  FormControlLabel,
  Select,
  MenuItem,
  Box,
} from "@mui/material";
import { SelectChangeEvent } from "@mui/material";

import { getRoleNameByFilter } from "../../shared/helpers/roleName";
import { useDispatch, useSelector } from "react-redux";
import {
  changeStatus,
  changeQuery,
  changeRole,
} from "../../slices/filterSlice";
import { RootState } from "../../app/store";

import { roleOptions } from "../../shared/selectOptions/roleSelectOptions";
import { EmployeeRoles } from "../../mockData/employes";

export const EmployeeFilter = () => {
  const dispatch = useDispatch();

  const role = useSelector((state: RootState) => state.filter.role);
  const status = useSelector((state: RootState) => state.filter.archiveStatus);
  const value = useSelector((state: RootState) => state.filter.name);

  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeQuery(e.target.value));
  };

  const handleRoleChange = (e: SelectChangeEvent<EmployeeRoles>) => {
    dispatch(changeRole(e.target.value as EmployeeRoles));
  };

  const handleStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeStatus(e.target.checked));
  };

  return (
    <Box className={styles.filter}>
      <TextField
        className={styles.query}
        label="Поиск"
        variant="outlined"
        onChange={handleQueryChange}
        defaultValue={value}
      />

      <Select
        value={role}
        onChange={handleRoleChange}
        displayEmpty
        className={styles.roles}
      >
        {roleOptions.map((value) => (
          <MenuItem value={value} key={value}>
            {getRoleNameByFilter(value)}
          </MenuItem>
        ))}
      </Select>

      <FormControlLabel
        className={styles.archiveStatus}
        control={<Checkbox checked={status} onChange={handleStatusChange} />}
        label={<span>В архиве</span>}
      />
    </Box>
  );
};
