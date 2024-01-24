import React,{useState,useEffect} from "react";
import './DangKiCS.scss'
import Header_KH from "../../components/Header_KH/Header_KH";
import { useLocation,useNavigate } from "react-router-dom";

import axios from "axios";

const option = [
    { value: 'Nam', label: 'Nam' },
    { value: 'Nữ', label: 'Nữ' },
    { value: 'Khác', label: 'Khác' }
  ]

const DangKiCS = () => {
    const [khach,setKhach] = useState()
    const style = {
        control: (base) => ({
          ...base,
        
          border: '0 !important',
          // This line disable the blue border
          boxShadow: '0 !important',
          '&:hover': {
              border: '0 !important'
           }
        })
    }
    const [startDate, setStartDate] = useState(new Date());
    const state = useLocation()
    const nav = useNavigate()
    const [ChinhSach, setChinhSach] = useState()
    useEffect(() => {
        axios.get(`https://localhost:7011/api/API_Policies/api/policies/${state.state.idChinhSach}`)
            .then((res) => {

                setChinhSach(res.data)
            })
            .catch((err) => console.log(err))

    }, [])
    useEffect(() => {
        axios.post(`https://localhost:7011/api/API_Get_KH_Info/Get_KH_Info`,{userId: localStorage.getItem("userId")})
            .then((res) => {
                setKhach(res.data)
                
            })
            .catch((err) => console.log(err))
    },[])

    const DKCS = () => {
        axios.post(`https://localhost:7011/api/API_CheckAndCreate_KhachHangChinhSach/check-and-create-Khachhangchinhsach`,{id_ChinhSach: state.state.idChinhSach,id_Khach: localStorage.getItem("userId")})
        .then((res) => {
            nav('/MainPage_KH')
        })
        .catch((err) => console.log(err))
    }

    return(
        <div className="DangKiCS">
            <div className="DangKiCS_Header">
                <Header_KH/>
            </div>
            <div className="DangKiCS_Name">
                Kê khai thông tin bảo hiểm
            </div>
            <div className="DangKiCS_NameCS">
               Gói: {ChinhSach?.name}
            </div>
            <div className="DangKiCS_HoTen">
                <div className="DangKiCS_HoTen_Text">Họ và tên</div>
                <div className="DangKiCS_HoTen_Input">{khach?.full_Name}</div>
            </div>
            <div className="DangKiCS_GioiTinh">
                <div className="DangKiCS_GioiTinh_Text">Giới tính</div>
                <div className="DangKiCS_GioiTinh_Input" >{khach?.gender} </div>
            </div>
            <div className="DangKiCS_NgaySinh">
                <div className="DangKiCS_NgaySinh_Text">Ngày sinh</div>
               
                <div className="DangKiCS_NgaySinh_Input">{khach?.birhday.substring(0,10)}</div>
             
            </div>
            <div className="DangKiCS_DiaChi">
                <div className="DangKiCS_DiaChi_Text">Địa chỉ</div>
                <div className="DangKiCS_DiaChi_Input">{khach?.adress}</div>
            </div>
            
            <div className="DangKiCS_Button">
                <div className="DangKiCS_Button_Huy" onClick={() => nav('/MainPage_KH')}>Hủy</div>
                <div className="DangKiCS_Button_DK" onClick={() => DKCS()}>Đăng kí</div>
            </div>
          
        </div>
    )
}

export default DangKiCS