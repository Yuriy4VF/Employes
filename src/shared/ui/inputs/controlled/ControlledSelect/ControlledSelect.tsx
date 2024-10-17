import React from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  SelectProps,
} from "@mui/material";
import { Controller, Control, FieldValues, Path } from "react-hook-form";
import { FieldError } from "react-hook-form";
import { RenderRole } from "../../../../helpers/roleName";

import { RoleOptions } from "../../../../selectOptions/roleSelectOptions";

interface ControlledSelectProps<TFieldValues extends FieldValues> {
  control: Control<TFieldValues>;
  name: Path<TFieldValues>;
  label: string;
  options: RoleOptions;
  error?: FieldError;
  helperText?: React.ReactNode;
  renderRole: RenderRole;
}

export const ControlledSelect = <TFieldValues extends FieldValues>({
  control,
  name,
  label,
  options,
  error,
  helperText,
  renderRole,
}: ControlledSelectProps<TFieldValues>) => (
  <FormControl fullWidth margin="normal" error={!!error}>
    <InputLabel id={`${name}-label`}>{label}</InputLabel>
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Select {...(field as SelectProps)} labelId={`${name}-label`}>
          {options.map((role) => (
            <MenuItem key={role} value={role}>
              {renderRole(role)}
            </MenuItem>
          ))}
        </Select>
      )}
    />
    {error && (
      <Typography color="error" variant="caption">
        {helperText}
      </Typography>
    )}
  </FormControl>
);
