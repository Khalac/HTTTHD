import React from "react";
import "./Header_NV.scss"
import { useNavigate } from "react-router-dom";

function Header_NV() {
    return (
        <div className="Header_NV">
            <div className="Header_NV_UserName">NV01: Nguyen Van A</div>
            <div className="Header_NV_Page">Trang chủ</div>
            <div className="Header_NV_Page">Tạo chính sách</div>
            <div className="Header_NV_Page">Xét duyệt</div>
        </div>
    )
}

export default Header_NV;