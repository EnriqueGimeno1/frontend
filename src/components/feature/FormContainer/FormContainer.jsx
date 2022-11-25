import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  CreateVehicleModel,
  CreateBranchOffice,
  CreateClient,
  CreateOrder,
  CreateUser,
  CreateDestination,
  CreateProduct,
  CreateVehicle,
} from "../forms/index";

import "./FormContainer.css";

export const FormContainer = () => {
  return (
    <div className="form-container">
      <Routes>
        <Route path="/create-branch-office" element={<CreateBranchOffice />} />
        <Route path="/create-client" element={<CreateClient />} />
        <Route path="/create-destination" element={<CreateDestination />} />
        <Route path="/create-order" element={<CreateOrder />} />
        <Route path="/create-product" element={<CreateProduct />} />
        <Route path="/create-user" element={<CreateUser />} />
        <Route path="/create-vehicle" element={<CreateVehicle />} />
        <Route path="/create-vehicle-model" element={<CreateVehicleModel />} />
      </Routes>
    </div>
  );
};
