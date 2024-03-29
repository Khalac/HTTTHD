import React from "react";
import './DSCS_KH.scss'
import { FaMagnifyingGlass } from "react-icons/fa6";

import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import axios from "axios"

function DSCS_KH({ state }) {

    const [ChinhSach, setChinhSach] = useState("")
    const [DanhSachCS, setDSCS] = useState([])
    const [active, setActive] = useState("0")
    const [DSTemp, setDSTemp] = useState()
    const userId = localStorage.getItem("userId")

    const nav = useNavigate()

    const removeExtraSpace = ((s) => s.trim().split(/ +/).join(' '))

    const capitalizeWords = (str) => {
        var temp = removeExtraSpace(str)
        return temp
            .toLowerCase()
            .split(' ')
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    };

    function filtered() {

        if (ChinhSach === "") {
            setActive("0")
            setDSCS(DanhSachCS)

        }
        else {
            setActive("1")
            var temp = []
            var cs = capitalizeWords(ChinhSach)
            for (var i = 0; i < DanhSachCS.length; ++i) {
                if (DanhSachCS[i].name.includes(cs.trim())) {
                    temp.push(DanhSachCS[i])
                }
            }
            setDSTemp(temp)
        }
    }

    let data = {
        status: 'Active'
      };
    let config = {
        headers: { 
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      };
      
    useEffect(() => {
        axios.post('https://localhost:7011/api/API_Get_ChinhSach_info/API_Get_ChinhSach_Info_Active_Disable',data,config)
            .then((res) => {
                setDSCS(res.data)
            })
            .catch((err) => console.log(err))

    }, [setDSCS])
  
    
    return (
        <div className="DSCS_KH">
            <div className="DSCS_KH_DS">
                Danh sách các chính sách
            </div>
            <div className="DSCS_KH_DSCS">
                <div className="DSCS_KH_DSCS_LookUp">
                    <input className="DSCS_KH_DSCS_LookUp_Input" onChange={(value) => setChinhSach(value.target.value)} />
                    <FaMagnifyingGlass className="DSCS_KH_DSCS_LookUp_Icon" onClick={() => filtered()} />
                </div>
                {
                    <div className="DSCS_KHDSCS_DS">
                        {active === "0" ? DanhSachCS?.map((DSCS, key) => {
                           
                            return <div className="DSCS_ChiTiet">
                                <div className="DSCS_ChiTiet_Ten">Gói: {DSCS.name}</div>
                                <div className="DSCS_ChiTiet_Des">{DSCS.description}</div>
                                <div className="DSCS_ChiTiet_Button_DangKy" onClick={() => nav('/MainPage_KH/DangKiCS',{ state: { idChinhSach: DSCS.idChinhSach } })}>Đăng ký </div>
                                <div className="DSCS_ChiTiet_Button_ChiTiet" onClick={() => nav('/MainPage_KH/XemTTCS',{ state: { idChinhSach: DSCS.idChinhSach } })}>Chi tiết </div>
                            </div>
                        }) : DSTemp?.map((DSCS, key) => {
                            return <div className="DSCS_ChiTiet">
                                <div className="DSCS_ChiTiet_Ten">Gói: {DSCS.name}</div>
                                <div className="DSCS_ChiTiet_Des">{DSCS.description}</div>
                                <div className="DSCS_ChiTiet_Button_DangKy" onClick={() => nav('/MainPage_KH/DangKiCS',{ state: { idChinhSach: DSCS.idChinhSach } })}>Đăng ký </div>
                                <div className="DSCS_ChiTiet_Button_ChiTiet" onClick={() => nav('/MainPage_KH/XemTTCS',{ state: { idChinhSach: DSCS.idChinhSach } })}>Chi tiết </div>
                            </div>
                        })}
                    </div>

                }
            </div>
        </div>
    )
}

export default DSCS_KH