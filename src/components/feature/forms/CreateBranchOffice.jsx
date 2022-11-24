import { Formik, Form } from "formik";
import * as Yup from "yup";
import "./FormsStyles.css";

import { CustomInput } from "../../shared";

export const CreateBranchOffice = () => {
  return (
    <div>
      <Formik
        initialValues={{
          branchOfficeName: "",
          address: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          branchOfficeName: Yup.number("El valor debe ser un número").required(
            "Requerido"
          ),
          address: Yup.number("El valor debe ser un número").required(
            "Requerido"
          ),
        })}
      >
        {(Formik) => (
          <Form>
            <CustomInput
              label="Nombre de Sucursal"
              name="branchOfficeName"
              placeholder="Nombre de Sucursal"
            />
            <CustomInput
              label="Dirección"
              name="address"
              placeholder="Dirección"
            />
            <button type="submit">Crear</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
