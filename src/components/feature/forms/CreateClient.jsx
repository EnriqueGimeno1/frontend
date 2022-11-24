import { Formik, Form } from "formik";
import * as Yup from "yup";
import "./FormsStyles.css";

import { CustomInput } from "../../shared";

export const CreateClient = () => {
  return (
    <div>
      <h1>Create Client</h1>

      <Formik
        initialValues={{
          clientName: "",
          email: "",
          receptionPoints: [],
          phoneNumber: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          clientName: Yup.string("Caracteres Incorrectos")
            .max(40, "Debe de tener 40 caracteres o menos")
            .required("Requerido"),
          email: Yup.string("Caracteres Incorrectos")
            .email("El correo no tiene un formato válido")
            .required("Requerido"),
          receptionPoints: Yup.number("Escriba una Ubicacion").required(
            "Requerido"
          ),
          phoneNumber: Yup.number("Escriba Numero").required("Requerido"),
        })}
      >
        {(Formik) => (
          <Form>
            <CustomInput
              label="Nombre"
              name="ClientName"
              placeholder="Nombre"
              allowedcharacters="justLetters"
              maxLength={45}
            />
            <CustomInput
              label="Correo Electronico"
              name="email"
              placeholder="correo@abrecaminos.com"
              type="email"
            />

            <CustomInput
              label="Puntos de Recepción"
              name="receptionPoint"
              placeholder="Puntos de Recepción"
            />

            <CustomInput
              label="Número de Contacto"
              name="phoneNumber"
              placeholder="Número Telefónico"
              allowedcharacters="positiveIntegers"
              maxLength={11}
            />

            <button type="submit">Registrar</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
