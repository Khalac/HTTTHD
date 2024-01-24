import React from "react";
import './ChinhSuaCS.scss'
import Header_NV from "../../components/Header_NV/Header_NV";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { notification } from "antd"

function ChinhSuaCS() {
    const state = useLocation()
    const [ChinhSach, setChinhSach] = useState()

    const [nameCS, setName] = useState("")
    const [minimumAgeCS, setMinimumAge] = useState()
    const [maximumAgeCS, setMaximumAge] = useState()
    const [monthlyPayCS, setMonthlyPay] = useState()
    const [descriptionCS, setDescription] = useState("")



    const ChinhSuaSuccess = (type) => {
        notification[type]({
            message: "Success",
            description: "Bạn đã chỉnh sửa chính sách thành công!!!",
        });
    }
    const nav = useNavigate()
    function goToMainPage() {
        nav('/MainPage_NV')
    }
    function SaveNewCS() {
        var nameTemp = nameCS
        var minimumAgeTemp = minimumAgeCS
        var maximumAgeTemp = maximumAgeCS
        var monthlyPayTemp = monthlyPayCS
        var descriptionTemp = descriptionCS
        if (nameCS === undefined || nameCS === "") {

            nameTemp = ChinhSach.name
            nameTemp = nameTemp.toString()
        }
        if (minimumAgeCS === undefined || minimumAgeCS === "") {
            minimumAgeTemp = ChinhSach.minimumAge
        }
        if (maximumAgeCS === undefined || maximumAgeCS === "") {
            maximumAgeTemp = ChinhSach.maximumAge
        }
        if (monthlyPayCS === undefined || monthlyPayCS === "") {
            monthlyPayTemp = ChinhSach.monthlyPay
        }
        if (descriptionCS === undefined || descriptionCS === "") {
            descriptionTemp = ChinhSach.description
            descriptionTemp = descriptionTemp.toString()
        }
    
        axios.put(`https://localhost:7011/api/API_Policies/api/policies/${state.state.idChinhSach}`, { name: nameTemp, minimumAge: minimumAgeTemp, maximumAge: maximumAgeTemp, monthlyPay: monthlyPayTemp, description: descriptionTemp, status:"Active" })
            .then((res) => {

                ChinhSuaSuccess("success")
                nav('/MainPage_NV')

            })
            .catch((err) => console.log(err))

    }

    useEffect(() => {
        axios.get(`https://localhost:7011/api/API_Policies/api/policies/${state.state.idChinhSach}`)
            .then((res) => {

                setChinhSach(res.data)
            })
            .catch((err) => console.log(err))

    }, [])
    return <div className="ChinhSuaCS">
        <div className="ChinhSuaCS_Header"><Header_NV /></div>
        <div className="ChinhSuaCS_ChinhSach">
            <div className="ChinhSuaCS_ChinhSach_FormName">Chỉnh sửa thông tin chính sách</div>
            <div className="ChinhSuaCS_ChinhSach_Form">
                <div className="ChinhSuaCS_ChinhSach_Form_Name">
                    <div className="ChinhSuaCS_ChinhSach_Form_Name_Text">Tên chính sách</div>
                    <input className="ChinhSuaCS_ChinhSach_Form_Name_Input" placeholder={ChinhSach?.name} onChange={(value) => setName(value.target.value)}></input>
                </div>
                <div className="ChinhSuaCS_ChinhSach_Form_Age">
                    <div className="ChinhSuaCS_ChinhSach_Form_Age_Text1">Độ tuổi</div>
                    <input className="ChinhSuaCS_ChinhSach_Form_Age_Input1" placeholder={ChinhSach?.minimumAge} onChange={(value) => setMinimumAge(value.target.value)}></input>
                    <div className="ChinhSuaCS_ChinhSach_Form_Age_Text2">đến</div>
                    <input className="ChinhSuaCS_ChinhSach_Form_Age_Input2" placeholder={ChinhSach?.maximumAge} onChange={(value) => setMaximumAge(value.target.value)}></input>
                </div>
                <div className="ChinhSuaCS_ChinhSach_Form_Price">
                    <div className="ChinhSuaCS_ChinhSach_Form_Price_Text">Đơn giá</div>
                    <input className="ChinhSuaCS_ChinhSach_Form_Price_Input" placeholder={ChinhSach?.monthlyPay} onChange={(value) => setMonthlyPay(value.target.value)}></input>
                </div>
                <div className="ChinhSuaCS_ChinhSach_Form_Description" >
                    <div className="ChinhSuaCS_ChinhSach_Form_Description_Text">Mô tả</div>
                    <textarea className="ChinhSuaCS_ChinhSach_Form_Description_Input" placeholder={ChinhSach?.description} onChange={(value) => setDescription(value.target.value)}></textarea>
                </div>
                <div className="ChinhSuaCS_ChinhSach_Form_Button">
                    <div className="ChinhSuaCS_ChinhSach_Form_Button_Huy" onClick={() => goToMainPage()}>Hủy</div>
                    <div className="ChinhSuaCS_ChinhSach_Form_Button_Luu" onClick={() => SaveNewCS()}>Lưu</div>
                </div>
            </div>
        </div>
    </div >
}

export default ChinhSuaCS