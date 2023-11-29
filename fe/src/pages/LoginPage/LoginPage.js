import React from "react";
import "./LoginPage.scss";

import logo from "../../components/assets/Logo/logo.png";
import LoginForm from "../../components/LoginForm/LoginForm";

function LoginPage() {
  return (
    <div className="LoginPage">
      <div className="LeftComponent">
        <img src={logo} alt="" className="LeftComponentImg" />
        <div className="LeftComponent_Text">Health Care</div>
      </div>
      <div className="RightComponent">
        <div className="RightComponent_Form_Name">Bảo hiểm y tế</div>
        <div className="RightComponent_Login_Form">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
