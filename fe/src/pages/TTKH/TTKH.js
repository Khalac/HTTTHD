import React,{useState,useEffect} from "react";
import './TTKH.scss'
import Header_KH from "../../components/Header_KH/Header_KH";

import { useNavigate } from "react-router-dom";

import { FaMagnifyingGlass } from "react-icons/fa6";

import axios from "axios";

const TTKH = () => {
    return (
        <div className="TTKH">
            <div className="TTKH_Header">
                <Header_KH/>
            </div>
        </div>
    )
}

export default TTKH