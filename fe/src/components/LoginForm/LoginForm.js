import React from "react";
import "./LoginForm.scss";
import { GoPerson, GoLock } from "react-icons/go";

function LoginForm() {
  return (
    <div className="LoginForm">
      <div className="UserNameForm">
        <GoPerson className="UserNameForm_Icon" />
        <input className="UserNameForm_Text" placeholder="Tài khoản" />
      </div>
      <div className="PasswordForm">
        <GoLock className="PasswordForm_Icon" />
        <input className="PasswordForm_Text" placeholder="Mật khẩu" />
      </div>
      <div className="LoginForm_ForgetPass">Bạn quên mật khẩu?</div>
      <div className="LoginForm_Button_LogIn">
        <div className="Button_Login">Đăng nhập</div>
      </div>
      <div className="LoginForm_Register_Text">Bạn chưa có tài khoản ?</div>
      <div className="LoginForm_Button_Register">
        <div className="Button_Register">Đăng ký</div>
      </div>
    </div>
  );
}

export default LoginForm;
