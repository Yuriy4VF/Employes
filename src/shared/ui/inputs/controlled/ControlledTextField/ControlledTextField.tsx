import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";

export const ControlledTextField = ({
  control,
  name,
  label,
  error,
  helperText,
  ...props
}) => (
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
