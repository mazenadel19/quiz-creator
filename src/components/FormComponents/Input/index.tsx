import { TextField } from "@mui/material";
// react-hook-form
import { Controller, useFormContext } from "react-hook-form";
import { Constants } from "../../../utils";

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
  const { control, formState: { errors } } = useFormContext();

  return (
    <Controller
      rules={{
        required: {
          value: true,
          message: "This field is required!"
        },
        pattern: type === 'url' ? {
          value: Constants.YoutubeRegex,
          message: 'Please enter a valid youtube url!',
        } : undefined
      }}
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
          helperText={!!errors[name] && (errors[name]?.message as string)}
        />
      )}
    />
  );
}

export default Input;
