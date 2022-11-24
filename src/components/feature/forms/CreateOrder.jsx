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
          orderNumber: Yup.number("Debe ser un número").required("Requerido"),
          branchOffice: Yup.string("Caracteres Incorrectos").required(
            "Requerido"
          ),
          orderType: Yup.string("Caracteres Incorrectos").required("Requerido"),
        })}
      >
        {(Formik) => (
          <Form>
            <CustomInput
              label="Número de Orden"
              name="orderNumber"
              placeholder="001234234"
              type="number"
            />
            <CustomSelect
              label="Sucursal"
              name="branchOffice"
              placeholder="Sucursal"
            >
              <option value="">Elija Sucursal</option>
            </CustomSelect>

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

            <button type="submit">Crear Orden</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
