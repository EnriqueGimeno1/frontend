import { Formik, Form } from "formik";
import * as Yup from "yup";
import "./FormsStyles.css";

import { CustomInput } from "../../shared";

export const CreateProduct = () => {
  return (
    <div>
      <h1>Create Product</h1>

      <Formik
        initialValues={{
          name: "",
          code: "",
          category: "",
          description: "",
          weight: "",
          length: "",
          width: "",
          height: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          name: Yup.string("Caracteres Incorrectos")
            .max(15, "Debe de tener 15 caracteres o menos")
            .required("Requerido"),
          code: Yup.string("Caracteres Incorrectos")
            .max(15, "Debe de tener 15 caracteres o menos")
            .required("Requerido"),
          category: Yup.string("Caracteres Incorrectos")
            .max(15, "Debe de tener 15 caracteres o menos")
            .required("Requerido"),
          description: Yup.string("Caracteres Incorrectos")
            .max(20, "Debe de tener 20 caracteres o menos")
            .required("Requerido"),
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
            <CustomInput label="Nombre" name="name" placeholder="Nombre" />
            <CustomInput label="Código" name="code" placeholder="1234" />
            <CustomInput
              label="Categoría"
              name="category"
              placeholder="Categoría"
            />
            <CustomInput
              label="Descripción"
              name="description"
              placeholder="Descripción"
            />
            <CustomInput
              label="Peso"
              name="weight"
              placeholder="Peso"
              allowedcharacters="positiveNumber"
              maxLength={8}
            />
            <CustomInput
              label="Largo"
              name="length"
              placeholder="Largo"
              allowedcharacters="positiveNumber"
              maxLength={8}
            />
            <CustomInput
              label="Ancho"
              name="width"
              placeholder="Ancho"
              allowedcharacters="positiveNumber"
              maxLength={8}
            />
            <CustomInput
              label="Altura"
              name="height"
              placeholder="Altura"
              allowedcharacters="positiveNumber"
              maxLength={8}
            />
            <button type="submit">Registrar</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
