import { Formik, Form } from "formik";
import * as Yup from "yup";
import "./FormsStyles.css";

import { CustomSelect, CustomInput } from "../../shared";

export const CreateDestination = () => {
  return (
    <div>
      <h1>Create Destination</h1>

      <Formik
        initialValues={{
          latitude: "",
          longitude: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          latitude: Yup.number("Escriba Numero").required("Requerido"),
          longitude: Yup.number("Escriba Numero").required("Requerido"),
        })}
      >
        {(Formik) => (
          <Form>
            <CustomInput
              label="Latitud"
              name="latitude"
              placeholder="Latitud"
              type="number"
            />
            <CustomInput
              label="Longitud"
              name="longitude"
              placeholder="Longitud"
              type="number"
            />

            <button type="submit">Enviar</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
