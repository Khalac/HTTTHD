import React from "react";
import "./MainPage_KH.scss";
import Header_KH from "../../components/Header_KH/Header_KH";


import DSCS_KH from "../../components/DSCS_KH/DSCS_KH";

function MainPage_KH() {


  return <div className="MainPage_KH">
    <div className="MainPage_KH_Header">
      <Header_KH />
    </div>
    <div className="MainPage_Kh_DSCS">
      <DSCS_KH/>
    </div>
  </div>;
}

export default MainPage_KH;
