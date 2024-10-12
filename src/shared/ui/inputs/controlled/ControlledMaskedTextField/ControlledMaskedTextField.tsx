import MaskedInput from "react-text-mask";
import { Controller } from "react-hook-form";
import { TextField } from "@mui/material";

export const ControlledMaskedTextField = ({
  mask,
  control,
  name,
  label,
  error,
  helperText,
}) => (
  <Controller
    name={name}
    control={control}
    render={({ field: { onChange, onBlur, value, ref } }) => (
      <MaskedInput
        mask={mask}
        value={value}
        onChange={onChange}
        render={(ref, props) => (
          <TextField
            {...props}
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
