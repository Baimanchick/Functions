import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import MainLayouts from "../layouts/MainLayouts";
import AddProductPage from "../pages/AddProductPage";

function MainRoutes() {
  return (
    <Routes>
      <Route element={<MainLayouts />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/add" element={<AddProductPage />} />
      </Route>
    </Routes>
  );
}

export default MainRoutes;
