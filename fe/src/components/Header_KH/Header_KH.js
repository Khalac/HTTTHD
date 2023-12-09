import React from "react";
import "./Header_KH.scss"
import { useNavigate } from "react-router-dom";

function Header_KH() {
    return (
        <div className="Header_KH">
            <div className="Header_KH_UserName">KH01: Nguyen Van A</div>
            <div className="Header_KH_Page">Trang chủ</div>
            <div className="Header_KH_Page">Thông tin đăng ký</div>
            <div className="Header_KH_Page">Chính sách của tôi</div>
        </div>
    )
}

export default Header_KH;