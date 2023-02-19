import { TextField } from "@mui/material";
// react-hook-form
import { Controller, useFormContext } from "react-hook-form";

interface InputProps {
  label?: string;
  type?: "text" | "url";
  name: string;
  placeholder?: string;
  disabled?: boolean;
  sx?: { [key: string]: string };
}

function Input(props: InputProps) {
  const { label, type, name, placeholder, disabled, sx } = props;
  const { control,formState: { errors } } = useFormContext();

  return (
    <Controller
      rules={{ required:true }}
      name={name}
      control={control}
      defaultValue={""}
      render={({ field }) => (
        <TextField
          {...field}
          disabled={disabled}
          type={type || "text"}
          sx={sx ? { display: "flex", ...sx } : { display: "flex" }}
          label={label || ""}
          variant='outlined'
          placeholder={placeholder || ""}
          error={!!errors[name]}
          helperText={!!errors[name] && (errors[name]?.type as string)}
        />
      )}
    />
  );
}

export default Input;
