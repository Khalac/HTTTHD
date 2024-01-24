import React,{useState,useEffect} from "react";
import "./XetDuyet.scss"

import { useNavigate,useLocation } from "react-router-dom";
import Header_NV from "../../components/Header_NV/Header_NV";

import axios from "axios";

import { notification } from "antd"

const XetDuyet = () => {

    
    const Duyet = (type) => {
        notification[type]({
            message: "Success",
            description: "Bạn đã duyệt chính sách thành công!!!",
        });
    }
    const Loai = (type) => {
        notification[type]({
            message: "Success",
            description: "Bạn đã loại chính sách thành công!!!",
        });
    }


    const [khach,setKhach] = useState()
    const [cs,setCS] = useState()
    const state= useLocation()
    const nav = useNavigate()


    useEffect(() => {
        axios.get(`https://localhost:7011/api/API_Policies/api/policies/${state.state.idChinhsach}`)
            .then((res) => {
                setCS(res.data)
            })
            .catch((err) => console.log(err))

    }, [])

    useEffect(() => {
        axios.post(`https://localhost:7011/api/API_Get_KH_Info/Get_KH_Info`,{userId: state.state.idKhach})
            .then((res) => {
                setKhach(res.data)
                
            })
            .catch((err) => console.log(err))

    }, [])
    
    const xetDuyetCS = (s) => {
       if(s === "Using"){
        axios.post(`https://localhost:7011/api/API_UpdateStatus_Accept/button-click`,{id: state.state.id, status: s,id_Chinhsach : state.state.idChinhsach})
        .then((res) => {
            Duyet('success')
            nav('/MainPage_NV/XetDuyetCS')
        })
        .catch((err) => console.log(err))
       }
       else{
        axios.post(`https://localhost:7011/api/API_UpdateStatus_Deny/button-click`,{id: state.state.id, status: s,id_Chinhsach : state.state.idChinhsach})
        .then((res) => {
            Loai('success')
            nav('/MainPage_NV/XetDuyetCS')
        })
        .catch((err) => console.log(err))
       }
    }
    
    return(
        <div className="XetDuyet">
            <div className="XetDuyet_Header"><Header_NV/></div>
            <div className="XetDuyet_Description">
                <div className="XetDuyet_Description_Name">Duyệt chính sách</div>
                <div className="XetDuyet_Description_TTCN">
                    <div className="XetDuyet_Description_TTCN_Name">Thông tin cá nhân</div>
                    <div className="XetDuyet_Description_TTCN_Infor">
                        <div className="XetDuyet_Description_TTCN_Infor_Text">Họ và tên : {khach?.full_Name}</div>
                        <div className="XetDuyet_Description_TTCN_Infor_Text">Ngày sinh : {khach?.birhday.substring(0,10)}</div>
                        <div className="XetDuyet_Description_TTCN_Infor_Text">Địa chỉ : {khach?.adress}</div>
                        <div className="XetDuyet_Description_TTCN_Infor_Text">Giới tính : {khach?.gender}</div>
                    </div>
                </div>
                <div className="XetDuyet_Description_DKSD">
                    <div className="XetDuyet_Description_DKSD_Name">Đăng kí sử dụng: </div>
                    <div className="XetDuyet_Description_DKSD_Infor">
                        <div className="XetDuyet_Description_TTCN_Infor_Text">Chính sách : Gói {cs?.name}</div>
                        <div className="XetDuyet_Description_TTCN_Infor_Text">Đăng kí tại : Cổng thông tin điện tử Bảo hiểm xã hội</div>
                    </div>
                </div>
                <div className="XetDuyet_Description_Button_QL" onClick={() => nav('/MainPage_NV/XetDuyetCS')}>Quay lại</div>
                <div className="XetDuyet_Description_Button_Loai" onClick={()=>xetDuyetCS("Deny")}>Loại</div>
                <div className="XetDuyet_Description_Button_Duyet" onClick={()=>xetDuyetCS("Using")} >Duyệt</div>
            </div>
           
        </div>
        
    )
}

export default XetDuyet