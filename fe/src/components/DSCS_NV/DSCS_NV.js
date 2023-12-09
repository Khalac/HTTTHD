import React from "react";
import './DSCS_NV.scss'
import { FaMagnifyingGlass } from "react-icons/fa6";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios"

function DSCS_NV({ state }) {
    const [ChinhSach, setChinhSach] = useState("")
    const [DanhSachCS, setDSCS] = useState()
    const [active, setActive] = useState("0")
    const [DSTemp, setDSTemp] = useState()


    const nav = useNavigate()
    function GoToCSCS(idChinhSach) {

        nav('/MainPage_NV/ChinhSuaCS', { state: { idChinhSach: idChinhSach } })
    }

    function filtered() {

        if (ChinhSach === "") {
            setActive("0")
            setDSCS(DanhSachCS)

        }
        else {
            setActive("1")
            var temp = []
            for (var i = 0; i < DanhSachCS.length; ++i) {
                if (DanhSachCS[i].name.includes(ChinhSach)) {
                    temp.push(DanhSachCS[i])
                }
            }
            setDSTemp(temp)
            console.log(temp)
        }


    }
    function XoaCS(idChinhSach) {
        for (var i = 0; i < DanhSachCS.length; ++i) {
            DanhSachCS[i].name.toLowerCase();
            if (DanhSachCS[i].idChinhSach === idChinhSach) {
                var temp = DanhSachCS.splice(i, 1)
            }
        }
        axios.delete(`https://localhost:7011/api/API_Policies/api/policies/${idChinhSach}`)
            .then((res) => {
                console.log(res)
            })
            .catch((err) => console.log(err))
    }


    useEffect(() => {
        axios.get(`https://localhost:7011/api/API_Policies/api/policies`)
            .then((res) => {

                setDSCS(res.data)
            })
            .catch((err) => console.log(err))

    }, [DanhSachCS])
    return (
        <div className="DSCS_NV">
            <div className="DSCS_NV_DS">
                Danh sách các chính sách
            </div>
            <div className="DSCS_NV_DSCS">
                <div className="DSCS_NV_DSCS_LookUp">
                    <input className="DSCS_NV_DSCS_LookUp_Input" onChange={(value) => setChinhSach(value.target.value)} />
                    <FaMagnifyingGlass className="DSCS_NV_DSCS_LookUp_Icon" onClick={() => filtered()} />
                </div>
                {
                    <div className="DSCS_NVDSCS_DS">
                        {active === "0" ? DanhSachCS?.map((DSCS, key) => {

                            return <div className="DSCS_NV_ChiTiet">
                                <div className="DSCS_NV_ChiTiet_Ten">Gói: {DSCS.name}</div>
                                <div className="DSCS_NV_ChiTiet_Des">{DSCS.description}</div>
                                <div className="DSCS_NV_ChiTiet_ChinhSua" onClick={() => GoToCSCS(DSCS.idChinhSach)}>Chỉnh sửa</div>
                                <div className="DSCS_NV_ChiTiet_Xoa" onClick={() => XoaCS(DSCS.idChinhSach)}>Xóa</div>
                            </div>
                        }) : DSTemp?.map((DSCS, key) => {
                            return <div className="DSCS_NV_ChiTiet">
                                <div className="DSCS_NV_ChiTiet_Ten">Gói: {DSCS.name}</div>
                                <div className="DSCS_NV_ChiTiet_Des">{DSCS.description}</div>
                                <div className="DSCS_NV_ChiTiet_ChinhSua" onClick={() => GoToCSCS(DSCS.idChinhSach)}>Chỉnh sửa</div>
                                <div className="DSCS_NV_ChiTiet_Xoa" onClick={() => XoaCS(DSCS.idChinhSach)}>Xóa</div>
                            </div>
                        })}
                    </div>

                }
            </div>
        </div>
    )
}

export default DSCS_NV