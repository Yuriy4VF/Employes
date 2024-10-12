import { Checkbox, FormControlLabel } from "@mui/material";
import { Controller } from "react-hook-form";

export const ControlledCheckbox = ({ control, name, label }) => (
  <FormControlLabel
    control={
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Checkbox
            checked={field.value}
            onChange={(e) => field.onChange(e.target.checked)}
          />
        )}
      />
    }
    label={label}
  />
);
