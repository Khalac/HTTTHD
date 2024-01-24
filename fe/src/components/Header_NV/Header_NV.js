import React from "react";
import "./Header_NV.scss"
import { useNavigate } from "react-router-dom";

function Header_NV() {
    const nav = useNavigate()
    const goToMainPage = () => {
        nav('/MainPage_NV')
    }
    const goToThemCS = () => {
        nav('/MainPage_NV/ThemCS')
    }
    const LogOut = () => {
        localStorage.removeItem("userId")
        localStorage.removeItem("token")
        localStorage.setItem("LoginNV",false)
        nav("/")
    }
    return (
        <div className="Header_NV">
            <div className="Header_NV_UserName">NV01: Nguyen Van A</div>
            <div className="Header_NV_Page" onClick={() => goToMainPage()}>Trang chủ</div>
            <div className="Header_NV_Page" onClick={() => goToThemCS()}>Tạo chính sách</div>
            <div className="Header_NV_Page" onClick={() => nav('/MainPage_NV/XetDuyetCS')}>Xét duyệt</div>
            <div className="Header_NV_LogOut" onClick={() => LogOut()}>Đăng xuất</div>
        </div>
    )
}

export default Header_NV;