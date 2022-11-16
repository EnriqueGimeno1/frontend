import { Formik, Form } from "formik";
import * as Yup from "yup";
import "./FormsStyles.css";

import { CustomSelect, CustomInput } from "../../shared";

export const CreateOrder = () => {
  return (
    <div>
      <h1>Create Order</h1>

      <Formik
        initialValues={{
          orderNumber: "",
          clientId: "",
          branchOffice: "",
          receptionPointId: "",
          orderType: "",
          tasks: [],
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          orderNumber: Yup.number().required("Requerido"),
          branchOffice: Yup.string().required("Requerido"),
          orderType: Yup.string().required("Requerido"),
        })}
      >
        {(Formik) => (
          <Form>
            <CustomInput
              label="Numero de Orden"
              name="orderNumber"
              placeholder="Numero de Orden"
              type="number"
            />
            <CustomInput
              label="Sucursal"
              name="branchOffice"
              placeholder="Sucursal"
            />
            <CustomSelect label="receptionPointId" name="receptionPointId">
              <option value="">Elija el Destino</option>
            </CustomSelect>

            <CustomInput
              label="Tipo de Orden"
              name="orderType"
              placeholder="Tipo de Orden"
            />
            <CustomInput
              label="Articulos"
              name="tasks"
              placeholder="Articulos"
            />

            <button type="submit">Enviar</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
