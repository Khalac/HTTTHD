import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import MainPage_KH from "./pages/MainPage_KH/MainPage_KH";
import MainPage_NV from "./pages/MainPage_NV/MainPage_NV";
import LoginPage from "./pages/LoginPage/LoginPage";
import ChinhSuaCS from "./pages/ChinhSuaCS/ChinhSuaCS";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import ThemCS from "./pages/ThemCS/ThemCS";
import XemTTCS from "./pages/XemTTCS/XemTTCS";
import DangKiCS from "./pages/DangKiCS/DangKiCS";
import XetDuyetCS from "./pages/XetDuyetCS/XetDuyetCS";
import XetDuyet from "./pages/XetDuyet/XetDuyet";
import TTDK from "./pages/TTDK/TTDK";
import CSCT from "./pages/CSCT/CSCT";
import TTKH from "./pages/TTKH/TTKH";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
      <Route exac path="/" element={<LoginPage />} />
      <Route exac path="/Register" element={<RegisterForm />} />
      <Route exac path="/MainPage_KH" element={<MainPage_KH />} />
      <Route exac path="/MainPage_KH/XemTTCS" element={<XemTTCS />} />
      <Route exac path="/MainPage_KH/DangKiCS" element={<DangKiCS />} />
      <Route exac path="/MainPage_KH/TTDK" element={<TTDK />} />
      <Route exac path="/MainPage_KH/CSCT" element={<CSCT />} />
      <Route exac path="/MainPage_KH/TTKH" element={<TTKH />} />

 




        <Route exac path="/MainPage_NV" element={<MainPage_NV />} />
        <Route exac path="/MainPage_NV/ChinhSuaCS" element={<ChinhSuaCS />} />
        <Route exac path="/MainPage_NV/ThemCS" element={<ThemCS />} />
        <Route exac path="/MainPage_NV/ThemCS" element={<ThemCS />} />
        <Route exac path="/MainPage_NV/XetDuyetCS" element={<XetDuyetCS />} />
        <Route exac path="/MainPage_NV/XetDuyetCS/XetDuyet" element={<XetDuyet />} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
