import { Formik, Form } from "formik";
import * as Yup from "yup";
import "./FormsStyles.css";

import { CustomSelect, CustomInput } from "../../shared";

export const CreateVehicle = () => {
  return (
    <div>
      <h1>Create Vehicle</h1>

      <Formik
        initialValues={{
          status: "",
          branchOfficeId: "",
          capacity: "",
          model: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          status: Yup.string()
            .max(15, "Debe de tener 15 caracteres o menos")
            .required("Requerido"),
        })}
      >
        {(Formik) => (
          <Form>
            <CustomInput label="Estado" name="status" placeholder="Estado" />

            <CustomSelect label="Sucursal" name="branchOfficeId">
              <option value="">Seleccione una Marca</option>
            </CustomSelect>

            <CustomInput
              label="Capacidad"
              name="capacity"
              placeholder="Capacidad"
            />
            <CustomInput label="Modelo" name="model" placeholder="Modelo" />
            <button type="submit">Enviar</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};