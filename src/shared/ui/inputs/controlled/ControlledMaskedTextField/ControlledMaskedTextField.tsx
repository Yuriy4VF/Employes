import React from "react";
import MaskedInput from "react-text-mask";
import { Controller, Control, FieldValues, Path } from "react-hook-form";
import { TextField, TextFieldProps } from "@mui/material";

interface ControlledMaskedTextFieldProps<TFieldValues extends FieldValues> {
  mask: (string | RegExp)[];
  control: Control<TFieldValues>;
  name: Path<TFieldValues>;
  label: string;
  error?: boolean;
  helperText?: React.ReactNode;
}

export const ControlledMaskedTextField = <TFieldValues extends FieldValues>({
  mask,
  control,
  name,
  label,
  error,
  helperText,
}: ControlledMaskedTextFieldProps<TFieldValues>) => (
  <Controller
    name={name}
    control={control}
    render={({ field: { onChange, value } }) => (
      <MaskedInput
        mask={mask}
        value={value}
        onChange={onChange}
        render={(ref, props) => (
          <TextField
            {...(props as TextFieldProps)}
            inputRef={ref}
            label={label}
            error={error}
            helperText={helperText}
            fullWidth
            margin="normal"
          />
        )}
      />
    )}
  />
);
