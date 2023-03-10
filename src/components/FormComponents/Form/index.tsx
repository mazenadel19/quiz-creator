// react-hook-form
import { FormProvider, useForm } from "react-hook-form";
// yupResolver
import { yupResolver } from "@hookform/resolvers/yup";

interface FormProps {
  children: React.ReactNode;
  schema?: any;
  defaultValues?: any;
  submitHandler: (data: any) => void;
  noReset?: boolean;
}

function Form(props: FormProps) {
  const { children, schema, submitHandler, noReset, defaultValues } = props;

  const methods = useForm({
    resolver: schema ? yupResolver(schema) : undefined,
    defaultValues: defaultValues ? defaultValues : undefined,
    mode: "onChange",
  });

  const onSubmit = (data: any) => {
    submitHandler(data);
    !noReset && methods.reset();
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} noValidate>
        {children}
      </form>
    </FormProvider>
  );
}

export default Form;
