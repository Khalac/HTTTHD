import React from "react";
import { useState } from "react";
import axios from "axios"
import "./LoginForm.scss";
import { GoPerson, GoLock } from "react-icons/go";
import { notification } from "antd"

function LoginForm() {
  const [user_Name, setuser_Name] = useState();
  const [password, setPassword] = useState();
  const LoginSuccess = (type) => {
    notification[type]({
      message: "Success",
      description: "Login successfully!!!",
    });
  }
  const LoginFailed = (type) => {
    notification[type]({
      message: "Error",
      description: "Your Username or Password is incorrect!!!",
    });
  }
  const LogIn = async () => {
    await axios.post("https://localhost:7011/api/API_Login/LoginCheck", { user_Name: user_Name, password: password })
      .then((res) => {
        if (res.data.onSuccess) {
          LoginSuccess("success")
        }
        else {
          LoginFailed("error")
        }
      })
      .catch((err) => console.log(err))
  }
  return (
    <div className="LoginForm">
      <div className="UserNameForm">
        <GoPerson className="UserNameForm_Icon" />
        <input className="UserNameForm_Text" placeholder="Tài khoản" onChange={(values) => setuser_Name(values.target.value)} />
      </div>
      <div className="PasswordForm">
        <GoLock className="PasswordForm_Icon" />
        <input className="PasswordForm_Text" placeholder="Mật khẩu" onChange={(values) => setPassword(values.target.value)} />
      </div>
      <div className="LoginForm_ForgetPass">Bạn quên mật khẩu?</div>
      <div className="LoginForm_Button_LogIn">
        <div className="Button_Login" onClick={() => LogIn()}>Đăng nhập</div>
      </div>
      <div className="LoginForm_Register_Text">Bạn chưa có tài khoản ?</div>
      <div className="LoginForm_Button_Register">
        <div className="Button_Register">Đăng ký</div>
      </div>
    </div>
  );
}

export default LoginForm;
