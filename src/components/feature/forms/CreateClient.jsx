import { Formik, Form } from "formik";
import * as Yup from "yup";
import "./FormsStyles.css";

import { CustomSelect, CustomInput } from "../../shared";

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
          clientName: Yup.string()
            .max(15, "Debe de tener 15 caracteres o menos")
            .required("Requerido"),
          email: Yup.string()
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
            />
            <CustomInput
              label="Correo Electronico"
              name="email"
              placeholder="Email@google.com"
              type="email"
            />

            <CustomSelect label="receptionPoint" name="receptionPoint">
              <option value="">Elija el Destino</option>
            </CustomSelect>

            <CustomInput
              label="Telefono"
              name="phoneNumber"
              placeholder="Telefono"
              type="number"
            />

            <button type="submit">Enviar</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
