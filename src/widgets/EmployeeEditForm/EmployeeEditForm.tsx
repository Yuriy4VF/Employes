import { useState } from "react";
import {
  TextField,
  Select,
  MenuItem,
  Checkbox,
  FormControlLabel,
  Button,
  FormControl,
  InputLabel,
  Box,
  Typography,
} from "@mui/material";
import MaskedInput from "react-text-mask";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styles from "./EmployeeEditForm.module.scss";

const MaskedTextField = ({ mask, control, name, label, defaultValue }) => (
  <Controller
    name={name}
    control={control}
    defaultValue={defaultValue}
    render={({ field: { ref, ...rest } }) => (
      <TextField
        {...rest}
        label={label}
        inputRef={(inputRef) => {
          ref(inputRef);
          return (
            <MaskedInput
              ref={inputRef}
              mask={mask}
              value={defaultValue}
              onChange={(e) => rest.onChange(e.target.value)}
            />
          );
        }}
        fullWidth
        margin="normal"
      />
    )}
  />
);

const validationSchema = yup.object().shape({
  name: yup.string().required("Это обязательное поле"),
  phone: yup.string().required("Это обязательное поле"),
  birthday: yup.string().required("Это обязательное поле"),
  role: yup.string().required("Это обязательное поле"),
});

const EmployeeEditForm = () => {
  const { control, handleSubmit, setValue } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const [employee, setEmployee] = useState({
    id: 1,
    name: "Илья Емельянов",
    isArchive: false,
    role: "driver",
    phone: "+7 (883) 508-3269",
    birthday: "12.02.1982",
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setEmployee((prevEmployee) => ({
      ...prevEmployee,
      [name]: type === "checkbox" ? checked : value,
    }));
    setValue(name, value);
  };

  const onSubmit = (data) => {
    setEmployee((prev) => ({ ...prev, ...data }));
    console.log("Updated Employee Data:", data);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      className={styles.editForm}
    >
      <Typography variant="h6" gutterBottom>
        Редактирование сотрудника
      </Typography>

      <Controller
        name="name"
        control={control}
        defaultValue={employee.name}
        render={({ field }) => (
          <TextField
            {...field}
            label="Имя сотрудника"
            fullWidth
            margin="normal"
          />
        )}
      />

      <MaskedTextField
        control={control}
        name="phone"
        label="Телефон"
        mask={[
          "+",
          "7",
          " ",
          "(",
          /[0-9]/,
          /\d/,
          /\d/,
          ")",
          " ",
          /[0-9]/,
          /\d/,
          /\d/,
          "-",
          /\d/,
          /\d/,
          "-",
          /\d/,
          /\d/,
        ]}
        defaultValue={employee.phone}
      />

      <MaskedTextField
        control={control}
        name="birthday"
        label="Дата рождения"
        mask={[/\d/, /\d/, ".", /\d/, /\d/, ".", /\d/, /\d/, /\d/, /\d/]}
        defaultValue={employee.birthday}
      />

      <FormControl fullWidth margin="normal">
        <InputLabel id="role-label">Должность</InputLabel>
        <Controller
          name="role"
          control={control}
          defaultValue={employee.role}
          render={({ field }) => (
            <Select {...field} labelId="role-label">
              <MenuItem value="all">Все</MenuItem>
              <MenuItem value="cook">Повар</MenuItem>
              <MenuItem value="waiter">Официант</MenuItem>
              <MenuItem value="driver">Водитель</MenuItem>
            </Select>
          )}
        />
      </FormControl>

      <FormControlLabel
        control={
          <Controller
            name="isArchive"
            control={control}
            render={({ field }) => (
              <Checkbox
                checked={field.value}
                onChange={(e) => {
                  field.onChange(e.target.checked);
                  handleChange(e);
                }}
              />
            )}
          />
        }
        label="В архиве"
      />

      <Button type="submit" variant="contained" color="primary" fullWidth>
        Сохранить
      </Button>
    </Box>
  );
};

export default EmployeeEditForm;
