import { TextField } from "@mui/material";
import { Controller, Control, FieldError, FieldValues } from "react-hook-form";

// Define the props interface for the ControlledTextField
interface ControlledTextFieldProps<TFieldValues extends FieldValues> {
  control: Control<TFieldValues>; // The control object from react-hook-form
  name: string; // The name of the field
  label: string; // The label for the TextField
  error?: FieldError; // Error object from react-hook-form
  helperText?: string; // Helper text to display
}

// Define the ControlledTextField component with typed props
export const ControlledTextField: React.FC<ControlledTextFieldProps> = ({
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
