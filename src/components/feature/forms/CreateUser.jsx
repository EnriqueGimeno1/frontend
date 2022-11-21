import { Formik, Form } from "formik";
import * as Yup from "yup";
import "./FormsStyles.css";

import { CustomSelect, CustomInput } from "../../shared";

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
            .max(20, "Debe de tener 20 caracteres o menos")
            .required("Requerido"),
          lastName: Yup.string()
            .max(20, "Debe de tener 20 caracteres o menos")
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
        })}
      >
        {(Formik) => (
          <Form>
            <CustomInput
              label="Nombres"
              name="firstName"
              placeholder="Nombre"
              allowedcharacters="justLetters"
              maxLength={25}
            />
            <CustomInput
              label="Apellidos"
              name="lastName"
              placeholder="Apellido"
              allowedcharacters="justLetters"
              maxLength={25}
            />
            <CustomInput
              label="Correo Electronico"
              name="email"
              placeholder="email@google.com"
              type="email"
            />
            <CustomInput
              label="Contraseña"
              name="password"
              placeholder="Contraseña"
              type="password"
              maxLength={25}
            />
            <CustomInput
              label="Confirmar Contraseña"
              name="confirmPassword"
              placeholder="Confirmar Contraseña"
              type="password"
              maxLength={25}
            />
            {/* SELECT */}
            <CustomSelect label="Sucursal" name="branchOffice">
              <option value="">Seleccionar Sucursal</option>
              {/* OPCIONES CARGADAS DESDE EL SERVIDOR */}
            </CustomSelect>

            <CustomInput
              label="Nacionalidad"
              name="nationality"
              placeholder="Nacionalidad"
              allowedcharacters="justLetters"
              maxLength={15}
            />
            <CustomInput
              label="Cedula"
              name="idNumber"
              placeholder="Cedula"
              maxLength={8}
              allowedcharacters="positiveIntegers"
            />

            <CustomInput
              label="Telefono"
              name="phoneNumber"
              placeholder="Telefono"
              maxLength={13}
              allowedcharacters="positiveIntegers"
            />

            <CustomSelect label="Cargo" name="accesLevel">
              <option value="">Elija una Opción</option>
              <option value="Gerente de Sucursal">Gerente de Sucursal</option>
              <option value="Operador de Despacho">Operador de Despacho</option>
              <option value="Conductor">Conductor</option>
            </CustomSelect>

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
              allowedcharacters="positiveIntegers"
              maxLength={15}
            />
            <button type="submit">Enviar</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
