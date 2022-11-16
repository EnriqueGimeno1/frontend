import { Formik, Form } from "formik";
import * as Yup from "yup";
import "./FormsStyles.css";

import { CustomSelect, CustomInput } from "../../shared";

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
          weight: true,
          length: "",
          width: "",
          height: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .max(15, "Debe de tener 15 caracteres o menos")
            .required("Requerido"),
          code: Yup.string()
            .max(15, "Debe de tener 15 caracteres o menos")
            .required("Requerido"),
          category: Yup.string()
            .max(15, "Debe de tener 15 caracteres o menos")
            .required("Requerido"),
          description: Yup.string()
            .max(20, "Debe de tener 20 caracteres o menos")
            .required("Requerido"),
          weight: Yup.number().required("Requerido"),
          length: Yup.number().required("Requerido"),
          width: Yup.number().required("Requerido"),
          height: Yup.number().required("Requerido"),
        })}
      >
        {(Formik) => (
          <Form>
            <CustomInput label="Nombre" name="name" placeholder="Nombre" />
            <CustomInput label="Codigo" name="code" placeholder="Codigo" />
            <CustomInput
              label="Categoria"
              name="category"
              placeholder="Categoria"
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
              type="number"
            />
            <CustomInput
              label="Largo"
              name="length"
              placeholder="Largo"
              type="number"
            />
            <CustomInput
              label="Ancho"
              name="width"
              placeholder="Ancho"
              type="number"
            />
            <CustomInput
              label="Altura"
              name="height"
              placeholder="Altura"
              type="number"
            />
            <button type="submit">Enviar</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
