import React,{useState,useEffect} from "react";

import { useNavigate } from "react-router-dom";

import { FaMagnifyingGlass } from "react-icons/fa6";

import axios from "axios";

import './XetDuyetCS.scss'
import Header_NV from "../../components/Header_NV/Header_NV";

const XetDuyetCS = () => {
    const [ChinhSach, setChinhSach] = useState("")
    const [active, setActive] = useState("0")
    const [DSTemp, setDSTemp] = useState()
    const [DanhSachDangKi,setDSDK] = useState([])

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
   

    function filtered() {

        if (ChinhSach === "") {
            setActive("0")
            setDSDK(DanhSachDangKi)

        }
        else {
            setActive("1")
            var temp = []
            var cs = capitalizeWords(ChinhSach)
            for (var i = 0; i < DanhSachDangKi.length; ++i) {
                if (DanhSachDangKi[i].name.includes(cs.trim())) {
                    temp.push(DanhSachDangKi[i])
                }
            }
            setDSTemp(temp)
        }
    }


    useEffect(() => {
        axios.get(`https://localhost:7011/api/API_Request/API_Request`)
            .then((res) => {

                setDSDK(res.data)
               
            })
            .catch((err) => console.log(err))

       
    })
 
    
    return(<div className="XetDuyetCS">
        <div className="XetDuyetCS_Header">
            <Header_NV/>
        </div>
      
        <div className="XetDuyetCS_DSCS">
            <div className="XetDuyetCS_DSCS_LookUp">
                <input className="XetDuyetCS_DSCS_LookUp_Input" onChange={(value) => setChinhSach(value.target.value)} />
                <FaMagnifyingGlass className="XetDuyetCS_DSCS_LookUp_Icon" onClick={() => filtered()} />
            </div>
            {
                <div className="XetDuyetCS_DSCS_DS">
                    {active === "0" ? DanhSachDangKi?.map((DSDK, key) => {
                  
                        return <div className="XetDuyetCS_ChiTiet" >
                            <div className="XetDuyetCS_ChiTiet_Ten">Gói: {DSDK.name}</div>
                            <div className="XetDuyetCS_ChiTiet_Des">{DSDK.description}</div>
                            { DanhSachDangKi[key].status === "Using" ? <div className="XetDuyetCS_ChiTiet_Status"> Đã duyệt </div> : DanhSachDangKi[key].status === "Deny" ? <div className="XetDuyetCS_ChiTiet_Status" >Từ chối</div> : DanhSachDangKi[key].status === "Waiting" ? <div className="XetDuyetCS_ChiTiet_Status" >Chờ duyệt</div> : <div className="XetDuyetCS_ChiTiet_Status" >Đã hủy</div>}
                            <div className="XetDuyetCS_ChiTiet_Xem" onClick={() => nav('/MainPage_NV/XetDuyetCS/XetDuyet',{state : {id: DSDK.id,status:DSDK.status,idChinhsach : DSDK.idChinhsach, idKhach : DSDK.idKhach}})}>Xem</div>
                        </div>
                    }) : DSTemp?.map((DSDK, key) => {
                        return <div className="XetDuyetCS_ChiTiet">
                            <div className="XetDuyetCS_ChiTiet_Ten">Gói: {DSDK.name}</div>
                            <div className="XetDuyetCS_ChiTiet_Des">{DSDK.description}</div>
                            { DanhSachDangKi[key].status === "Using" ? <div className="XetDuyetCS_ChiTiet_Status"> Đã duyệt </div> : DanhSachDangKi[key].status === "Deny" ? <div className="XetDuyetCS_ChiTiet_Status" >Từ chối</div> : DanhSachDangKi[key].status === "Waiting" ? <div className="XetDuyetCS_ChiTiet_Status" >Chờ duyệt</div> : <div className="XetDuyetCS_ChiTiet_Status" >Đã hủy</div>}
                            <div className="XetDuyetCS_ChiTiet_Xem" onClick={() => nav('/MainPage_NV/XetDuyetCS/XetDuyet',{state: {id: DSDK.id,status:DSDK.status,idChinhsach : DSDK.idChinhsach, idKhach : DSDK.idKhach}   })}>Xem</div>
                        </div>
                    })}
                </div>

            }
        </div>
    </div>)
}

export default XetDuyetCS