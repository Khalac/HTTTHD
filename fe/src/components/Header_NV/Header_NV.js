import React,{useState, useEffect, useReducer} from "react";
import "./Header_NV.scss"
import { useNavigate } from "react-router-dom";

import axios from "axios";

function Header_NV() {
    const [name,setName] = useState()
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
    useEffect(() => {
        axios.get(`https://localhost:7011/api/API_ViewInfoEmployee/${localStorage.getItem("userId")}`)
        .then((res) => {
            setName(res.data.full_Name)
      })
      .catch((err) => console.log(err))
    })
    return (
        <div className="Header_NV">
            <div className="Header_NV_UserName">NV01: {name}</div>
            <div className="Header_NV_Page" onClick={() => goToMainPage()}>Trang chủ</div>
            <div className="Header_NV_Page" onClick={() => goToThemCS()}>Tạo chính sách</div>
            <div className="Header_NV_Page" onClick={() => nav('/MainPage_NV/XetDuyetCS')}>Xét duyệt</div>
            <div className="Header_NV_LogOut" onClick={() => LogOut()}>Đăng xuất</div>
        </div>
    )
}

export default Header_NV;