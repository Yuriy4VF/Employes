import { FieldError } from "react-hook-form";
import { RenderRoleType } from "../../../../helpers/roleName";
import { RoleOptionsType } from "../../../../selectOptions/roleSelectOptions";

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

interface ControlledSelectProps<TFieldValues extends FieldValues> {
  control: Control<TFieldValues>;
  name: Path<TFieldValues>;
  label: string;
  options: RoleOptionsType;
  error?: FieldError;
  helperText?: React.ReactNode;
  renderRole: RenderRoleType;
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
        <Select
          {...(field as SelectProps)}
          labelId={`${name}-label`}
          label={label}
        >
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
