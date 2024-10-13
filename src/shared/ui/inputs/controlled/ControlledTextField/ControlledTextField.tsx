import { TextField } from "@mui/material";
import {
  Controller,
  Control,
  FieldError,
  FieldValues,
  Path,
} from "react-hook-form";

interface ControlledTextFieldProps<TFieldValues extends FieldValues> {
  control: Control<TFieldValues>;
  name: Path<TFieldValues>;
  label: string;
  error?: FieldError;
  helperText?: string;
}

export const ControlledTextField = <TFieldValues extends FieldValues>({
  control,
  name,
  label,
  error,
  helperText,
  ...props
}: ControlledTextFieldProps<TFieldValues>) => (
  <Controller
    name={name}
    control={control}
    render={({ field }) => (
      <TextField
        {...field}
        label={label}
        error={!!error}
        helperText={helperText}
        fullWidth
        margin="normal"
        {...props}
      />
    )}
  />
);
