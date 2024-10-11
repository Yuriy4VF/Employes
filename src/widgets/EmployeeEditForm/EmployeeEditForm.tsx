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

const MaskedTextField = ({ mask, control, name, label, error, helperText }) => (
  <Controller
    name={name}
    control={control}
    render={({ field: { onChange, onBlur, value, ref } }) => (
      <MaskedInput
        mask={mask}
        value={value}
        onChange={onChange}
        render={(ref, props) => {
          console.log(props);
          return (
            <TextField
              {...props}
              inputRef={ref}
              label={label}
              error={error}
              helperText={helperText}
              fullWidth
              margin="normal"
            />
          );
        }}
      />
    )}
  />
);

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .max(15, "Максимальная длина имени 15 символов")
    .min(3, "Минимальная длина имени 3 символа!")
    .required("Это обязательное поле"),
  phone: yup.string().required("Это обязательное поле"),
  birthday: yup.string().required("Это обязательное поле"),
  role: yup.string().required("Это обязательное поле"),
});

const EmployeeEditForm = ({ edit, initialData }) => {
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: initialData,
  });

  const onSubmit = (data) => {
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
        render={({ field }) => (
          <TextField
            {...field}
            label="Имя сотрудника"
            error={!!errors.name}
            helperText={errors.name ? errors.name.message : ""}
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
          { fixed: true, maxLength: 15 },
        ]}
        error={!!errors.phone}
        helperText={errors.phone ? errors.phone.message : ""}
      />

      <MaskedTextField
        control={control}
        name="birthday"
        label="Дата рождения"
        mask={[
          /\d/,
          /\d/,
          ".",
          /\d/,
          /\d/,
          ".",
          /\d/,
          /\d/,
          /\d/,
          /\d/,
          { fixed: true, maxLength: 10 },
        ]}
        error={!!errors.birthday}
        helperText={errors.birthday ? errors.birthday.message : ""}
      />

      <FormControl fullWidth margin="normal">
        <InputLabel id="role-label">Должность</InputLabel>
        <Controller
          name="role"
          control={control}
          render={({ field }) => (
            <Select {...field} labelId="role-label" error={!!errors.role}>
              <MenuItem value="all">Все</MenuItem>
              <MenuItem value="cook">Повар</MenuItem>
              <MenuItem value="waiter">Официант</MenuItem>
              <MenuItem value="driver">Водитель</MenuItem>
            </Select>
          )}
        />
        {errors.role && (
          <Typography color="error" variant="caption">
            {errors.role.message}
          </Typography>
        )}
      </FormControl>

      <FormControlLabel
        control={
          <Controller
            name="isArchive"
            control={control}
            render={({ field }) => (
              <Checkbox
                checked={field.value}
                onChange={(e) => field.onChange(e.target.checked)}
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
