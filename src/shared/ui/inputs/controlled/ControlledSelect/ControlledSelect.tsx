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

interface Option {
  value: string | number;
  label: string;
}

interface ControlledSelectProps<TFieldValues extends FieldValues> {
  control: Control<TFieldValues>;
  name: Path<TFieldValues>;
  label: string;
  options: Option[];
  error?: FieldError;
  helperText?: React.ReactNode;
}

export const ControlledSelect = <TFieldValues extends FieldValues>({
  control,
  name,
  label,
  options,
  error,
  helperText,
}: ControlledSelectProps<TFieldValues>) => (
  <FormControl fullWidth margin="normal" error={!!error}>
    <InputLabel id={`${name}-label`}>{label}</InputLabel>
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Select {...(field as SelectProps)} labelId={`${name}-label`}>
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
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
