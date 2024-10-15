import styles from "./EmployeeFilter.module.scss";
import { useForm, Controller } from "react-hook-form";
import {
  TextField,
  Checkbox,
  FormControlLabel,
  Select,
  MenuItem,
  Button,
  Box,
} from "@mui/material";

export const EmployeeFilter = () => {
  const { control, handleSubmit, watch } = useForm({
    defaultValues: {
      archived: false,
      position: "",
    },
  });

  const onSubmit = (data) => {
    console.log("Checkbox and Select Data:", data);
  };

  const handleQueryChange = (event) => {
    console.log("Query:", event.target.value);
  };

  return (
    <Box className={styles.filter}>
      <TextField
        label="Поиск"
        variant="outlined"
        onChange={handleQueryChange}
      />
      <Controller
        name="position"
        control={control}
        render={({ field }) => (
          <Select {...field} displayEmpty className={styles.roles}>
            <MenuItem value="">Все должности</MenuItem>
            <MenuItem value="developer">Разработчик</MenuItem>
            <MenuItem value="designer">Дизайнер</MenuItem>
            <MenuItem value="manager">Менеджер</MenuItem>
          </Select>
        )}
      />
      <Box className={styles.archive}>
        <Controller
          name="archived"
          control={control}
          render={({ field }) => (
            <FormControlLabel
              control={<Checkbox {...field} />}
              label={<span>В архиве</span>}
            />
          )}
        />
      </Box>

      <Button variant="contained" onClick={handleSubmit(onSubmit)}>
        Применить
      </Button>
    </Box>
  );
};
