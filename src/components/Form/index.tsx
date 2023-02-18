// react-hook-form
import { FormProvider, useForm } from "react-hook-form";
// yupResolver
import { yupResolver } from "@hookform/resolvers/yup";


// interface
export interface Iprops {
  children?: JSX.Element | JSX.Element[];
  schema?: any;
  submitHanlder: (data: any) => void;
  noReset?: boolean
}

function Form(props: Iprops) {
  const { children, schema, submitHanlder, noReset } = props;
  const methods = useForm({ resolver: schema ? yupResolver(schema) : undefined,});
  const onSubmit = (data: any) => {
    submitHanlder(data);
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
