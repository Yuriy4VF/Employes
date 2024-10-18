import { FC } from "react";
import { EmployeeEditFormProps } from "./EmployeeEditForm.type";
import { EmployeeFormDataType } from "../../mockData/employes";

import styles from "./EmployeeEditForm.module.scss";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Box, Typography } from "@mui/material";
import { SimpleButton } from "../../shared/ui";

import {
  ControlledTextField,
  ControlledMaskedTextField,
  ControlledCheckbox,
  ControlledSelect,
} from "../../shared/ui/inputs/controlled";

import { DATE_MASK, PHONE_MASK } from "../../shared/constants/fieldPatterns";
import { roleOptions } from "../../shared/selectOptions/roleSelectOptions";
import { employeeEditSchema } from "../../shared/formSchemes/formSchemes";
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
  } = useForm<EmployeeFormDataType>({
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
      <ControlledSelect
        control={control}
        name="role"
        label="Должность"
        options={roleOptions}
        error={errors.role}
        helperText={errors.role ? "This field is required" : ""}
        renderRole={getRoleName}
      />

      <ControlledCheckbox control={control} name="isArchive" label="В архиве" />

      <SimpleButton type="submit" fullWidth controlWidth>
        Сохранить{" "}
      </SimpleButton>
    </Box>
  );
};
