import styles from "./EmployeeEditForm.module.scss";

import { FC } from "react";
import type { EmployeeEditFormProps } from "./EmployeeEditForm.type";

import {
  Box,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from "@mui/material";

import { SimpleButton } from "../../shared/ui";

import {
  ControlledTextField,
  ControlledMaskedTextField,
  ControlledCheckbox,
} from "../../shared/ui/inputs/controlled";

import { roleOptions } from "../../shared/formSchemes/roleSelectOptions";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { DATE_MASK, PHONE_MASK } from "../../shared/constants/fieldPatterns";

import { employeeEditSchema } from "../../shared/formSchemes/formSchemes";
import { EmployeeFormData, EmployeeRoles } from "../../mockData/employes";
import { getRoleName } from "../../shared/helpers/roleName";

export const EmployeeEditForm: FC<EmployeeEditFormProps> = ({
  edit,
  initialData,
  onSubmit,
}) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<EmployeeFormData>({
    resolver: yupResolver(employeeEditSchema),
    defaultValues: {
      ...initialData,
      isArchive: initialData?.isArchive ?? false,
    },
  });

  const title = edit
    ? "Редактирование данных сотрудника"
    : "Создание данных сотрудника";

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      className={styles.editForm}
    >
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>

      <ControlledTextField
        control={control}
        name="name"
        label="Имя сотрудника"
        error={errors.name}
        helperText={errors.name ? errors.name.message : ""}
      />

      <ControlledMaskedTextField
        control={control}
        name="phone"
        label="Телефон"
        mask={PHONE_MASK}
        error={!!errors.phone}
        helperText={errors.phone ? errors.phone.message : ""}
      />

      <ControlledMaskedTextField
        control={control}
        name="birthday"
        label="Дата рождения"
        mask={DATE_MASK}
        error={!!errors.birthday}
        helperText={errors.birthday ? errors.birthday.message : ""}
      />

      <FormControl fullWidth error={!!errors.role}>
        <InputLabel id="role-label">Должность</InputLabel>
        <Controller
          name="role"
          control={control}
          render={({ field }) => (
            <Select {...field} labelId="role-label" label="Должность">
              {roleOptions.map((role: EmployeeRoles) => (
                <MenuItem value={role}>{getRoleName(role)}</MenuItem>
              ))}
            </Select>
          )}
        />
        <FormHelperText>
          {errors.role ? errors.role.message : ""}
        </FormHelperText>
      </FormControl>

      <ControlledCheckbox control={control} name="isArchive" label="В архиве" />

      <SimpleButton type="submit" fullWidth controlWidth>
        Сохранить{" "}
      </SimpleButton>
    </Box>
  );
};
