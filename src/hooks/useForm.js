import { useState } from "react";

export const useForm = (initialState) => {
  const [formData, setFormData] = useState(initialState);

  const onChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
    // console.log(event);
  };

  const resetForm = () => {
    setFormData({ ...initialState });
  };

  const isValidEmail = (email) => {
    const regularExpression =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regularExpression.test(email);
  };

  return {
    ...formData,

    // properties
    formData,
    // Methods
    onChange,
    resetForm,
    isValidEmail,
  };
};
