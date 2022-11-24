import { Formik, Form } from "formik";
import * as Yup from "yup";
import "./FormsStyles.css";

import { CustomInput } from "../../shared";

export const CreateVehicleModel = () => {
  return (
    <div>
      <Formik
        initialValues={{
          brand: "",
          volume: "",
          weight: "",
          length: "",
          width: "",
          height: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          brand: Yup.string("Caracteres Incorrestos").required("Requerido"),
          volume: Yup.number("El valor debe ser un número").required(
            "Requerido"
          ),
          weight: Yup.number("El valor debe ser un número").required(
            "Requerido"
          ),
          length: Yup.number("El valor debe ser un número").required(
            "Requerido"
          ),
          width: Yup.number("El valor debe ser un número").required(
            "Requerido"
          ),
          height: Yup.number("El valor debe ser un número").required(
            "Requerido"
          ),
        })}
      >
        {(Formik) => (
          <Form>
            <CustomInput label="Marca" name="brand" placeholder="Marca" />
            <CustomInput
              label="Volumen"
              name="volume"
              placeholder="100.002"
              allowedcharacters="positiveNumber"
              maxLength={8}
            />
            <CustomInput
              label="Peso"
              name="weight"
              placeholder="100.002"
              allowedcharacters="positiveNumber"
              maxLength={8}
            />
            <CustomInput
              label="Profundidad"
              name="length"
              placeholder="100.002"
              allowedcharacters="positiveNumber"
              maxLength={8}
            />
            <CustomInput
              label="Ancho"
              name="width"
              placeholder="100.002"
              allowedcharacters="positiveNumber"
              maxLength={8}
            />
            <CustomInput
              label="Altura"
              name="height"
              placeholder="100.002"
              allowedcharacters="positiveNumber"
              maxLength={8}
            />

            <button type="submit">Crear</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
