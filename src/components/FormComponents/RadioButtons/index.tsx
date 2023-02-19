import { Controller, useFormContext } from "react-hook-form";
import { FormHelperText, FormLabel, FormControl, FormControlLabel, RadioGroup, Radio } from "@mui/material";

interface RadioButtonsProps {
  label: string;
  name: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
}

export default function RadioButtons(props: RadioButtonsProps) {
  const { label, name, option1, option2, option3, option4 } = props;
  const { control, formState: { errors }} = useFormContext();

  return (
    <Controller
      rules={{ required:true }}
      name={name}
      control={control}
      defaultValue={""}
      render={({ field }) => (
        <FormControl error={!!errors[name]?.type}>
          <FormLabel>{label}</FormLabel>
          <RadioGroup row {...field}>
            <FormControlLabel value={0} control={<Radio />} label={option1}/>
            <FormControlLabel value={1} control={<Radio />} label={option2} />
            <FormControlLabel value={2} control={<Radio />} label={option3} />
            <FormControlLabel value={3} control={<Radio />} label={option4}/>
          </RadioGroup>
          {errors[name] && <FormHelperText>{errors[name]?.type as string}</FormHelperText>}
        </FormControl>
      )}
    />
  );
}
