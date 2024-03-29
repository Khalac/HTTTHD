import React from "react";
import './DSCS_NV.scss'
import { FaMagnifyingGlass } from "react-icons/fa6";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios"

import { notification } from "antd"

import Select from 'react-select'

function DSCS_NV() {
    const option =[
        { value: 'All', label: 'All' },
        { value: 'Active', label: 'Active' },
        { value: 'Disabled', label: 'Disabled' }
   ]
   const [value,setValue] = useState("All")
   
    const DeleteCSSuccess = (type) => {
        notification[type]({
            message: "Success",
            description: "Delete successfully!!!",
        });
    }
    const DeleteCSFailed = (type) => {
        notification[type]({
            message: "Error",
            description: "Delete Failed!!!",
        });
    }

    const [ChinhSach, setChinhSach] = useState("")
    const [DanhSachCS, setDSCS] = useState()
    const [active, setActive] = useState("0")
    const [DSTemp, setDSTemp] = useState()

    const removeExtraSpace = ((s) => s.trim().split(/ +/).join(' '))

    const capitalizeWords = (str) => {
        var temp = removeExtraSpace(str)
        return temp
            .toLowerCase()
            .split(' ')
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    };




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
            var cs = capitalizeWords(ChinhSach)
            for (var i = 0; i < DanhSachCS.length; ++i) {
                if (DanhSachCS[i].name.includes(cs.trim())) {
                    temp.push(DanhSachCS[i])
                }
            }
            setDSTemp(temp)

        }


    }
    function XoaCS(idChinhSach) {

        axios.delete(`https://localhost:7011/api/API_Policies/api/policies/${idChinhSach}`)
            .then((res) => {
                DeleteCSSuccess("success")
            })
            .catch((err) => DeleteCSFailed('error'))
    }

    let data = {
        status: value
      };
    let config = {
        headers: { 
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      };
      

    useEffect(() => {
        if(value === "All"){
            axios.get(`https://localhost:7011/api/API_Policies/api/policies`)
            .then((res) => {
    
                setDSCS(res.data)
    
            })
            .catch((err) => console.log(err))
        }
        else{
            axios.post('https://localhost:7011/api/API_Get_ChinhSach_info/API_Get_ChinhSach_Info_Active_Disable',data,config)
            .then((res) => {
             
                setDSCS(res.data)
            })
            .catch((err) => console.log(err))

        }
     

    }, [DanhSachCS])

    return (
        <div className="DSCS_NV">
            <Select className="Select" defaultValue={option[0]} options={option} onChange={(value) => setValue(value.value)}/>
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
                            return value === "Disabled" ? <div className="DSCS_NV_ChiTiet">
                                <div className="DSCS_NV_ChiTiet_Ten">Gói: {DSCS.name}</div>
                                <div className="DSCS_NV_ChiTiet_Des">{DSCS.description}</div>
                                <div className="DSCS_NV_ChiTiet_ChinhSua" onClick={() => GoToCSCS(DSCS.idChinhSach)}>Chỉnh sửa</div>
                               
                            </div> : <div className="DSCS_NV_ChiTiet">
                                <div className="DSCS_NV_ChiTiet_Ten">Gói: {DSCS.name}</div>
                                <div className="DSCS_NV_ChiTiet_Des">{DSCS.description}</div>
                                <div className="DSCS_NV_ChiTiet_ChinhSua" onClick={() => GoToCSCS(DSCS.idChinhSach)}>Chỉnh sửa</div>
                                <div className="DSCS_NV_ChiTiet_Xoa" onClick={() => XoaCS(DSCS.idChinhSach)}>Xóa</div>
                            </div>
                        }) : DSTemp?.map((DSCS, key) => {
                            return value === "Disabled" ? <div className="DSCS_NV_ChiTiet">
                            <div className="DSCS_NV_ChiTiet_Ten">Gói: {DSCS.name}</div>
                            <div className="DSCS_NV_ChiTiet_Des">{DSCS.description}</div>
                            <div className="DSCS_NV_ChiTiet_ChinhSua" onClick={() => GoToCSCS(DSCS.idChinhSach)}>Chỉnh sửa</div>
                           
                        </div> : <div className="DSCS_NV_ChiTiet">
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