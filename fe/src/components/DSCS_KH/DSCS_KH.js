import React from "react";
import './DSCS_KH.scss'
import { FaMagnifyingGlass } from "react-icons/fa6";

import { useState, useEffect } from "react";

import axios from "axios"

function DSCS_KH({ state }) {
    const [ChinhSach, setChinhSach] = useState("")
    const [DanhSachCS, setDSCS] = useState()
    const [active, setActive] = useState("0")
    const [DSTemp, setDSTemp] = useState()

    function filtered() {

        if (ChinhSach === "") {
            setActive("0")
            setDSCS(DanhSachCS)

        }
        else {
            setActive("1")
            var temp = []
            for (var i = 0; i < DanhSachCS.length; ++i) {
                DanhSachCS[i].name.toLowerCase();
                if (DanhSachCS[i].name.includes(ChinhSach)) {
                    temp.push(DanhSachCS[i])
                }
            }
            setDSTemp(temp)
            console.log(temp)
        }


    }


    useEffect(() => {
        axios.get(`https://localhost:7011/api/API_Policy/api/policies/${state.state.userId}`)
            .then((res) => {

                setDSCS(res.data)
            })
            .catch((err) => console.log(err))

    }, [])
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
                                <div className="DSCS_ChiTiet_Button_DangKy">Đăng ký </div>
                                <div className="DSCS_ChiTiet_Button_ChiTiet">Chi tiết </div>
                            </div>
                        }) : DSTemp?.map((DSCS, key) => {
                            return <div className="DSCS_ChiTiet">
                                <div className="DSCS_ChiTiet_Ten">Gói: {DSCS.name}</div>
                                <div className="DSCS_ChiTiet_Des">{DSCS.description}</div>
                                <div className="DSCS_ChiTiet_Button_DangKy">Đăng ký </div>
                                <div className="DSCS_ChiTiet_Button_ChiTiet">Chi tiết </div>
                            </div>
                        })}
                    </div>

                }
            </div>
        </div>
    )
}

export default DSCS_KH