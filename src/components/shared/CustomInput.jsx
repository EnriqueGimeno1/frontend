import { ErrorMessage, useField } from "formik";

export const CustomInput = ({ label, ...props }) => {
  const [field] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      <ErrorMessage
        name={props.name}
        component="span"
        className="custon-span-error-class"
      />
    </>
  );
};
