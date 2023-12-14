import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './RegisterForm.scss'
import { notification } from "antd"

import axios from 'axios'

const RegisterForm = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [repassword, setRePassword] = useState("")

    const RegisterSuccess = (type) => {
        notification[type]({
            message: "Success",
            description: "Register successfully!!!",
        });
    }
    const RegisterDontInput = (type) => {
        notification[type]({
            message: "Error",
            description: "You have to input all information!!!",
        });
    }
    const passworddontmatch = (type) => {
        notification[type]({
            message: "Error",
            description: "Your re-enter password don't match with your password!!!",
        });
    }
    const RegisterFail = (type) => {
        notification[type]({
            message: "Error",
            description: "Register fail!!!",
        });
    }


    const nav = useNavigate()
    const goToLogin = () => {
        nav('/')
    }
    const registerAcc = async () => {
        if (username === "" || password === "" || repassword === "") {
            RegisterDontInput("error")
        }
        else if (password != repassword) {
            passworddontmatch('error')
        }
        else {
            await axios.post("https://localhost:7011/api/API_CreateNewAccount_KH/LoginCheck", { userName: username, password: password })
                .then((res) => {
                    if (res.data.userNameCheck) {
                        RegisterSuccess("success")
                        goToLogin()
                    }
                    else {
                        RegisterFail("error")
                    }
                })
                .catch((err) => console.log(err))
        }
    }
    return (<div className="RegisterForm">
        <div className="RegisterForm_Name">Đăng ký tài khoản</div>
        <div className="RegisterForm_Username">
            <div className="RegisterForm_Username_Text">Tên tài khoản</div>
            <input className="RegisterForm_Username_Input" placeholder="Nhập tên tài khoản của bạn" onChange={(values) => setUsername(values.target.value)} />
        </div>
        <div className="RegisterForm_Password">
            <div className="RegisterForm_Password_Text">Mật khẩu</div>
            <input className="RegisterForm_Password_Input" placeholder="Nhập mật khẩu" onChange={(values) => setPassword(values.target.value)} />
        </div>
        <div className="RegisterForm_RePassword">
            <div className="RegisterForm_RePassword_Text">Mật khẩu</div>
            <input className="RegisterForm_RePassword_Input" placeholder="Nhập mật khẩu" onChange={(values) => setRePassword(values.target.value)} />
        </div>
        <div className="RegisterForm_Button">
            <div className="RegisterForm_Button_QL" onClick={() => goToLogin()}>Quay lại</div>
            <div className="RegisterForm_Button_DK" onClick={() => registerAcc()}>Đăng ký</div>
        </div>
    </div>)
}

export default RegisterForm