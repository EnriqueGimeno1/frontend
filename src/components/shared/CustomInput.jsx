import { ErrorMessage, useField } from "formik";
import { useState } from "react";

export const CustomInput = ({ label, ...props }) => {
  const [field, , helper] = useField(props);
  const [userInput, setUserInput] = useState();
  const acceptOnlyNumbers = () => {
    helper.setValue(field.value);
    if (field.value >= 0) {
      helper.setValue(field.value);
    }
    console.log(field.value);
  };
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input
        className="text-input"
        {...field}
        {...props}
        value={userInput}
        onChange={acceptOnlyNumbers}
      />
      <ErrorMessage
        name={props.name}
        component="span"
        className="custon-span-error-class"
      />
    </>
  );
};
