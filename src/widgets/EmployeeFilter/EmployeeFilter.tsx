import { useForm, Controller } from "react-hook-form";
import {
  TextField,
  Checkbox,
  FormControlLabel,
  Select,
  MenuItem,
  Button,
} from "@mui/material";

const EmployeeFilter = () => {
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
    <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
      <TextField
        label="Поиск"
        variant="outlined"
        onChange={handleQueryChange}
      />

      <Controller
        name="archived"
        control={control}
        render={({ field }) => (
          <FormControlLabel
            control={<Checkbox {...field} />}
            label="В архиве"
          />
        )}
      />

      <Controller
        name="position"
        control={control}
        render={({ field }) => (
          <Select {...field} displayEmpty>
            <MenuItem value="">Все должности</MenuItem>
            <MenuItem value="developer">Разработчик</MenuItem>
            <MenuItem value="designer">Дизайнер</MenuItem>
            <MenuItem value="manager">Менеджер</MenuItem>
          </Select>
        )}
      />

      <Button variant="contained" onClick={handleSubmit(onSubmit)}>
        Применить
      </Button>
    </div>
  );
};

export default EmployeeFilter;
