import { Formik, Form } from "formik";
import * as Yup from "yup";

import { CustomCheckBox, CustomSelect, CustomInput } from "../shared";

import "../feature/forms/FormsStyles.css";

export const FormikAbstractation = () => {
  return (
    <div>
      <h1>Formik Abstractation</h1>

      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          terms: false,
          jobType: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Debe de tener 15 caracteres o menos")
            .required("Requerido"),
          lastName: Yup.string()
            .max(15, "Debe de tener 15 caracteres o menos")
            .required("Requerido"),
          email: Yup.string()
            .email("El correo no tiene un formato válido")
            .required("Requerido"),
          terms: Yup.boolean().oneOf([true], "Debe de aceptar las condiciones"),
          jobType: Yup.string()
            .notOneOf(["it-jr"], "Esta opcion no es permitida")
            .required("Requerido"),
        })}
      >
        {(Formik) => (
          <Form>
            <CustomInput
              label="Fisrt Name"
              name="firstName"
              placeholder="Nombre"
            />

            <CustomInput
              label="Last Name"
              name="lastName"
              placeholder="Apellido"
            />

            <CustomInput
              label="Email Address"
              name="email"
              placeholder="email@google.com"
              type="email"
            />

            <CustomSelect label="Job Type" name="jobType">
              <option value="">Pick something</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="it-senior">It Senior</option>
              <option value="it-jr">It Jr</option>
            </CustomSelect>

            <CustomCheckBox label="Terms & Conditions" name="terms" />

            <button type="submit">Enviar</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
