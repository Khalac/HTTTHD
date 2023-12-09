import React from "react";
import "./MainPage_NV.scss";
import Header_NV from "../../components/Header_NV/Header_NV";
import DSCS_NV from "../../components/DSCS_NV/DSCS_NV";
import { useLocation } from "react-router-dom";

function MainPage_NV() {
    const state = useLocation()
    return <div className="MainPage_NV">
        <div className="MainPage_NV_Header">
            <Header_NV />
        </div>
        <div className="MainPage_NV_DSCS">
            <DSCS_NV state={state} />
        </div>
    </div>;
}
export default MainPage_NV;
