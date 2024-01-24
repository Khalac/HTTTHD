import React from "react";
import './ThemCS.scss'
import Header_NV from "../../components/Header_NV/Header_NV";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { notification } from "antd"


function ThemCS() {


    const [nameCS, setName] = useState("")
    const [minimumAgeCS, setMinimumAge] = useState()
    const [maximumAgeCS, setMaximumAge] = useState()
    const [monthlyPayCS, setMonthlyPay] = useState()
    const [descriptionCS, setDescription] = useState("")



    const ThemCSSuccess = (type) => {
        notification[type]({
            message: "Success",
            description: "Bạn đã thêm chính sách thành công!!!",
        });
    }
    const ThemCSFail = (type) => {
        notification[type]({
            message: "Error",
            description: "Hãy điền đầy đủ thông tin chính sách!!!",
        });
    }
    const nav = useNavigate()
    function goToMainPage() {
        nav('/MainPage_NV')
    }
    function SaveNewCS() {

        if (nameCS === undefined || nameCS.trim() === "") {

            ThemCSFail("error")

        }
        else if (minimumAgeCS === undefined || minimumAgeCS === "") {
            ThemCSFail("error")

        }
        else if (maximumAgeCS === undefined || maximumAgeCS === "") {
            ThemCSFail("error")

        }
        else if (monthlyPayCS === undefined || monthlyPayCS === "") {
            ThemCSFail("error")

        }
        else if (descriptionCS === undefined || descriptionCS.trim() === "") {
            ThemCSFail("error")

        }
        else (axios.post(`https://localhost:7011/api/API_Policies/api/policies`, { name: nameCS, minimumAge: minimumAgeCS, maximumAge: maximumAgeCS, monthlyPay: monthlyPayCS, description: descriptionCS })
            .then((res) => {
                ThemCSSuccess("success")
                nav('/MainPage_NV')

            })
            .catch((err) => console.log(err)))

    }

    return <div className="ThemCS">
        <div className="ThemCS_Header"><Header_NV /></div>
        <div className="ThemCS_ChinhSach">
            <div className="ThemCS_ChinhSach_Form">
                <div className="ThemCS_ChinhSach_Form_Name">
                    <div className="ThemCS_ChinhSach_Form_Name_Text">Tên chính sách</div>
                    <input className="ThemCS_ChinhSach_Form_Name_Input" placeholder="Nhập tên chinh sách" onChange={(value) => setName(value.target.value)}></input>
                </div>
                <div className="ThemCS_ChinhSach_Form_Age">
                    <div className="ThemCS_ChinhSach_Form_Age_Text1">Độ tuổi</div>
                    <input className="ThemCS_ChinhSach_Form_Age_Input1" placeholder="Nhập tuổi nhỏ nhất" onChange={(value) => setMinimumAge(value.target.value)}></input>
                    <div className="ThemCS_ChinhSach_Form_Age_Text2">đến</div>
                    <input className="ThemCS_ChinhSach_Form_Age_Input2" placeholder="Nhập tuổi lớn nhất" onChange={(value) => setMaximumAge(value.target.value)}></input>
                </div>
                <div className="ThemCS_ChinhSach_Form_Price">
                    <div className="ThemCS_ChinhSach_Form_Price_Text">Đơn giá</div>
                    <input className="ThemCS_ChinhSach_Form_Price_Input" placeholder="Nhập số tiền" onChange={(value) => setMonthlyPay(value.target.value)}></input>
                </div>
                <div className="ThemCS_ChinhSach_Form_Description" >
                    <div className="ThemCS_ChinhSach_Form_Description_Text">Mô tả</div>
                    <textarea className="ThemCS_ChinhSach_Form_Description_Input" placeholder="Nhập mô tả cho chính sách" onChange={(value) => setDescription(value.target.value)}></textarea>
                </div>
                <div className="ThemCS_ChinhSach_Form_Button">
                    <div className="ThemCS_ChinhSach_Form_Button_Huy" onClick={() => goToMainPage()}>Hủy</div>
                    <div className="ThemCS_ChinhSach_Form_Button_Luu" onClick={() => SaveNewCS()}>Lưu</div>
                </div>
            </div>
        </div>
    </div>

}

export default ThemCS