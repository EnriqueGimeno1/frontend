import { Formik, Form } from "formik";
import * as Yup from "yup";
import "./FormsStyles.css";

import { CustomCheckBox, CustomSelect, CustomInput } from "../../shared";

export const CreateUser = () => {
  return (
    <div>
      <h1>Create User</h1>

      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          isActive: true,
          branchOffice: "",
          accessLevel: "",
          nationality: "",
          idNumber: "",
          phoneNumber: "",
          driverLicenseStatus: "",
          designatedVehicleId: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Debe de tener 15 caracteres o menos")
            .required("Requerido"),
          lastName: Yup.string()
            .max(15, "Debe de tener 15 caracteres o menos")
            .required("Requerido"),
          email: Yup.string()
            .email("El correo no tiene un formato válido")
            .required("Requerido"),
          password: Yup.string()
            .required("Por favor escriba su contraseña")
            .min(8, "Debe contener al menos 8 caracteres")
            .max(20, "Debe contener un maximo de 20 caracteres"),
          confirmPassword: Yup.string()
            .required("Las contraseñas deben coincidir")
            .oneOf(
              [Yup.ref("password"), null],
              "Las contraseñas deben coincidir"
            ),

          isActive: Yup.boolean().required("Requerido"),
          branchOffice: Yup.string().required("Requerido"),
          accessLevel: Yup.string().required("Requerido"),
          nationality: Yup.string().required("Requerido"),
          idNumber: Yup.number().required("Requerido"),
          phoneNumber: Yup.number("Escriba Numero").required("Requerido"),
          designatedVehicleId: Yup.string(),
          // terms: Yup.boolean().oneOf([true], "Debe de aceptar las condiciones"),
          // jobType: Yup.string()
          //   .notOneOf(["it-jr"], "Esta opcion no es permitida")
          //   .required("Requerido"),
        })}
      >
        {(Formik) => (
          <Form>
            <CustomInput label="Nombre" name="firstName" placeholder="Nombre" />
            <CustomInput
              label="Apellido"
              name="lastName"
              placeholder="Apellido"
            />
            <CustomInput
              label="Correo Electronico"
              name="email"
              placeholder="Email@google.com"
              type="email"
            />
            <CustomInput
              label="Contraseña"
              name="password"
              placeholder="Contraseña"
              type="password"
            />
            <CustomInput
              label="Confirmar Contraseña"
              name="confirmPassword"
              placeholder="Confirmar Contraseña"
              type="password"
            />
            {/* SELECT */}
            <CustomInput
              label="Sucursal"
              name="branchOffice"
              placeholder="Sucursal"
            />
            {/* SELECT */}
            <CustomInput label="Cargo" name="accessLevel" placeholder="Cargo" />
            <CustomInput
              label="Nacionalidad"
              name="nationality"
              placeholder="Nacionalidad"
            />
            <CustomInput
              label="Cedula"
              name="idNumber"
              placeholder="Cedula"
              type="number"
            />

            <CustomInput
              label="Telefono"
              name="phoneNumber"
              placeholder="Telefono"
              type="number"
            />
            {/* <CustomInput
              label="Estado de la Licencia"
              name="driverLicenseStatus"
              placeholder="Estado de la Licencia"
              type="driverLicenseStatus"
            /> */}
            <CustomInput
              label="Numero de Licencia"
              name="designatedVehicleId"
              placeholder="Numero de Licencia"
            />

            <CustomSelect label="Job Type" name="jobType">
              <option value="">Pick something</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="it-senior">It Senior</option>
              <option value="it-jr">It Jr</option>
            </CustomSelect>
            <CustomCheckBox label="Terms & Conditions" name="terms" />
            <button type="submit">Enviar</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
