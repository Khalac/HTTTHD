import React,{useState, useEffect} from "react";

import './XemTTCS.scss'

import { useLocation,useNavigate } from "react-router-dom";
import Header_KH from "../../components/Header_KH/Header_KH";


import axios from "axios";

const XemTTCS = () => {
    const state = useLocation()
    const nav = useNavigate()
    const [ChinhSach, setChinhSach] = useState()
    useEffect(() => {
        axios.get(`https://localhost:7011/api/API_Policies/api/policies/${state.state.idChinhSach}`)
            .then((res) => {

                setChinhSach(res.data)
            })
            .catch((err) => console.log(err))

    }, [])
    return (
        <div className="XemTTCS">
            <div className="XemTTCS_Header">
                <Header_KH/>
            </div>
            <div className="XemTTCS_ChinhSach">
                <div className="XemTTCS_Name"> {ChinhSach?.name}</div>
               
                <div className="XemTTCS_Age">
                Độ tuổi áp dụng : từ {ChinhSach?.minimumAge} đến {ChinhSach?.maximumAge} tuổi
                </div>
                <div className="XemTTCS_Price">
                    Giá: {ChinhSach?.monthlyPay} VND
                </div>
                <div className="XemTTCS_Des">
                {ChinhSach?.description}
                </div>
                <div className="XemTTCS_Button_DK"  onClick={() => nav('/MainPage_KH/DangKiCS',{ state: { idChinhSach: ChinhSach.idChinhSach } })}>Đăng ký</div>
                 <div className="XemTTCS_Button_QL" onClick={() => nav('/MainPage_KH')}>Quay lại</div>
            </div>
            
            
        </div>
    )
}

export default XemTTCS