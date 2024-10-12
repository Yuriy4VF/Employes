import { Checkbox, FormControlLabel } from "@mui/material";
import { Controller, Control, FieldValues, Path } from "react-hook-form";

interface ControlledCheckboxProps<TFieldValues extends FieldValues> {
  control: Control<TFieldValues>;
  name: Path<TFieldValues>;
  label: string;
}

export const ControlledCheckbox = <TFieldValues extends FieldValues>({
  control,
  name,
  label,
}: ControlledCheckboxProps<TFieldValues>) => (
  <FormControlLabel
    control={
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Checkbox
            checked={!!field.value}
            onChange={(e) => field.onChange(e.target.checked)}
          />
        )}
      />
    }
    label={label}
  />
);
