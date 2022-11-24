import { Formik, Form } from "formik";
import * as Yup from "yup";
import "./FormsStyles.css";

import { CustomInput } from "../../shared";

export const CreateDestination = () => {
  return (
    <div>
      <h1>Create Destination</h1>

      <Formik
        initialValues={{
          destinationName: "",
          address: "",
          latitude: "",
          longitude: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          destinationName: Yup.string("Caracteres Incorrectos").required(
            "Requerido"
          ),
          address: Yup.string("Caracteres Incorrectos").required("Requerido"),
          latitude: Yup.number("El valor debe ser un número").required(
            "Requerido"
          ),
          longitude: Yup.number("El valor debe ser un número").required(
            "Requerido"
          ),
        })}
      >
        {(Formik) => (
          <Form>
            <CustomInput
              label="Nombre de destino"
              name="destinationName"
              placeholder="Nombre de destino"
            />
            <CustomInput
              label="Dirección de destino"
              name="address"
              placeholder="Dirección de destino"
            />
            <CustomInput
              label="Latitud"
              name="latitude"
              placeholder="Latitud"
              allowedcharacters="numbers"
            />
            <CustomInput
              label="Longitud"
              name="longitude"
              placeholder="Longitud"
              allowedcharacters="numbers"
            />

            <button type="submit">Añadir</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
