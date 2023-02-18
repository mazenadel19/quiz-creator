import { TextField } from "@mui/material";
// react-hook-form
import { Controller, useFormContext } from "react-hook-form";

export interface Iprops {
  inputLabel?: string;
  type?: "text" | "url";
  name: string;
  placeholder?: string;
  defaultValue?: string;
  disabled?: boolean;
  sx?: { [key: string]: string };
}

function Input(props: Iprops) {
  const { inputLabel, type, name, placeholder, defaultValue, disabled, sx } = props;
  const { control, formState: { errors },} = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue || ""}
      render={({ field: { ...otherFields } }) => (
        <TextField
          {...otherFields}
          disabled={disabled}
          type={type || "text"}
          sx={sx ? { width: "100%", ...sx } : { width: "100%" }}
          label={inputLabel || ""}
          variant='outlined'
          placeholder={placeholder || ""}
          error={!!errors[name]}
          helperText={!!errors[name] && (errors[name]?.message as string)}
        />
      )}
    />
  );
}

export default Input;
