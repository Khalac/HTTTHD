import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import MainPage_KH from "./pages/MainPage_KH/MainPage_KH";
import MainPage_NV from "./pages/MainPage_NV/MainPage_NV";
import LoginPage from "./pages/LoginPage/LoginPage";
import ChinhSuaCS from "./pages/ChinhSuaCS/ChinhSuaCS";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import ThemCS from "./pages/ThemCS/ThemCS";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exac path="/" element={<LoginPage />} />
        <Route exac path="/Register" element={<RegisterForm />} />
        <Route exac path="/MainPage_NV" element={<MainPage_NV />} >

        </Route>

        <Route exac path="/MainPage_KH" element={<MainPage_KH />} />
        <Route exac path="/MainPage_NV/ChinhSuaCS" element={<ChinhSuaCS />} />
        <Route exac path="/MainPage_NV/ThemCS" element={<ThemCS />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
