import styles from "./EmployeeFilter.module.scss";
import {
  TextField,
  Checkbox,
  FormControlLabel,
  Select,
  MenuItem,
  Box,
} from "@mui/material";

import { getRoleName } from "../../shared/helpers/roleName";
import { useDispatch, useSelector } from "react-redux";
import {
  changeStatus,
  changeQuery,
  changeRole,
} from "../../slices/filterSlice";
import { RootState } from "../../app/store";

import { options } from "../../shared/formSchemes/filterOptions";

export const EmployeeFilter = () => {
  const dispatch = useDispatch();

  const role = useSelector((state: RootState) => state.filter.role);
  const status = useSelector((state: RootState) => state.filter.archiveStatus);
  const value = useSelector((state: RootState) => state.filter.name);

  const handleQueryChange = (e) => {
    dispatch(changeQuery(e.target.value));
  };

  const handleRoleChange = (e) => {
    dispatch(changeRole(e.target.value));
  };

  const handleStatusChange = (e) => {
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
        {options.map((value) => (
          <MenuItem value={value} key={value}>
            {getRoleName(value)}
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
