import React,{useState,useEffect} from "react";
import './TTKH.scss'
import Header_KH from "../../components/Header_KH/Header_KH";

import { useNavigate } from "react-router-dom";


import axios from "axios";

const TTKH = () => {
    const nav = useNavigate()
    const [KH,setKH] = useState()
    const [name,SetName] = useState()
    const [birhday,setBirhday] = useState()
    const [gender,setGender] = useState()
    const [adress,setAdress] = useState()
    useEffect(() => {
        axios.post(`https://localhost:7011/api/API_Get_KH_Info/Get_KH_Info`,{userId: localStorage.getItem("userId")})
            .then((res) => {
                setKH(res.data)
                
            })
            .catch((err) => console.log(err))

    }, [setKH])
        
    const LuuTTKH = () => {
        var nameTemp = name
        var adressTemp = adress
        var genderTemp = gender
        var birhdayTemp = birhday
        if(name === "" || name === undefined){
            nameTemp = KH.full_Name
        }
        if(adress === "" || adress === undefined){
            adressTemp = KH.adress
        }
        if(birhday === "" || birhday === undefined){
            birhdayTemp = KH.birhday
        }
        if(gender === "" || gender === undefined){
            genderTemp = KH.gender
        }
        axios.post(`https://localhost:7011/api/API_EditInfo_KH/Get_KH_Info`,{userId: localStorage.getItem("userId"),full_Name : nameTemp,gender:genderTemp,adress:adressTemp,birhday:birhdayTemp})
        .then((res) => {
            console.log(res)
            nav('/MainPage_KH')
        })
        .catch((err) => console.log(err))
    }
    const LogOut = () => {
        localStorage.setItem("loginKH","false")
        localStorage.removeItem("userId")
        localStorage.removeItem("token")
        nav("/")
    }
    return (
        <div className="TTKH">
            <div className="TTKH_Header">
                <Header_KH/>
            </div>
            <div className="TTKH_Form">
                <div className="TTKH_Form_Name">Chỉnh sửa thông tin cá nhân</div>
                <div className="TTKH_Form_Detail">
                    <div className="TTKH_Form_Detail_Text">Họ và tên</div>
                    <input className="TTKH_Form_Detail_Input" placeholder={KH?.full_Name} onChange={(value) => SetName(value.target.value)}/>
                </div>
                <div className="TTKH_Form_Detail">
                    <div className="TTKH_Form_Detail_Text">Ngày sinh</div>
                    <input className="TTKH_Form_Detail_Input" placeholder={KH?.birhday.substring(0,10)}  onChange={(value) => setBirhday(value.target.value)}/>
                </div>
                <div className="TTKH_Form_Detail">
                    <div className="TTKH_Form_Detail_Text">Giới tính</div>
                    <input className="TTKH_Form_Detail_Input" placeholder={KH?.gender}  onChange={(value) => setGender(value.target.value)}/>
                </div>
                <div className="TTKH_Form_Detail">
                    <div className="TTKH_Form_Detail_Text">Địa chỉ</div>
                    <input className="TTKH_Form_Detail_Input" placeholder={KH?.adress}  onChange={(value) => setAdress(value.target.value)}/>
                </div>
                <div className="TTKH_Form_Button_Huy" onClick={() => nav("/MainPage_KH")}>Hủy</div>
                <div className="TTKH_Form_Button_Luu" onClick={() => LuuTTKH()}>Lưu</div>
                <div className="TTKH_Form_Button_DangXuat" onClick={() => LogOut()}>Đăng xuất</div>
            </div>
        </div>
    )
}

export default TTKH