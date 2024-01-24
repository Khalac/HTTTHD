import React,{useEffect,useState} from "react";
import "./Header_KH.scss"
import { useNavigate } from "react-router-dom";

import axios from "axios";

function Header_KH() {
    const [name,setName] = useState()
    const nav = useNavigate()
    const goToMainPage = () => {
        nav('/MainPage_KH')
    }
    useEffect(() => {
        axios.post(`https://localhost:7011/api/API_Get_KH_Info/Get_KH_Info`,{userId : localStorage.getItem("userId")})
            .then((res) => {
               if(res.data.onSuccess){
                setName(res.data.full_Name)
               }
            })
            .catch((err) => console.log(err))

    },[])

    return (
        <div className="Header_KH">
            <div className="Header_KH_UserName" onClick={()=> nav('/MainPage_KH/TTKH')}>KH: {name}</div>
            <div className="Header_KH_Page" onClick={() => goToMainPage()}>Trang chủ</div>
            <div className="Header_KH_Page" onClick={()=> nav('/MainPage_KH/TTDK')} >Thông tin đăng ký</div>
            <div className="Header_KH_Page"onClick={()=> nav('/MainPage_KH/CSCT')}>Chính sách của tôi</div>
        </div>
    )
}

export default Header_KH;