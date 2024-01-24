import React,{useState,useEffect} from "react";
import './CSCT.scss'
import Header_KH from "../../components/Header_KH/Header_KH";
import { useLocation,useNavigate } from "react-router-dom";
import { FaMagnifyingGlass } from "react-icons/fa6";

import axios from "axios";

const CSCT = () => {
    const [ChinhSach, setChinhSach] = useState("")
    const [active, setActive] = useState("0")
    const [DSTemp, setDSTemp] = useState()
    const [DS,setDS] = useState([])

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
            setDS(DS)

        }
        else {
            setActive("1")
            var temp = []
            var cs = capitalizeWords(ChinhSach)
            for (var i = 0; i < DS.length; ++i) {
                if (DS[i].name.includes(cs.trim())) {
                    temp.push(DS[i])
                }
            }
            setDSTemp(temp)
        }
    }

    useEffect(() => {
        axios.get(`https://localhost:7011/api/API_Request/API_Request`)
            .then((res) => {
                setDS(res.data)
            })
            .catch((err) => console.log(err))
    },[setDS])
    console.log(DS)
    return <div className="CSCT">
        <div className="CSCT_Header"><Header_KH/></div>
        <div className="CSCT_DSCS">
            <div className="CSCT_DSCS_LookUp">
                <input className="CSCT_DSCS_LookUp_Input" onChange={(value) => setChinhSach(value.target.value)} />
                <FaMagnifyingGlass className="CSCT_DSCS_LookUp_Icon" onClick={() => filtered()} />
            </div>
            {
                <div className="CSCT_DSCS_DS">
                    {active === "0" ? DS?.map((DSDK, key) => {
                  
                        return  DSDK?.idKhach === localStorage.getItem("userId") && DSDK.status === "Using" ?  <div className="CSCT_ChiTiet" >
                        <div className="CSCT_ChiTiet_Ten">Gói: {DSDK.name}</div>
                       <div className="CSCT_ChiTiet_Des">{DSDK.description}</div>
                       
                       </div> : <></>
                        
                    }) : DSTemp?.map((DSDK, key) => {
                        return  DSDK?.idKhach === localStorage.getItem("userId") && DSDK.status !== "Using" ?  <div className="CSCT_ChiTiet" >
                        <div className="CSCT_ChiTiet_Ten">Gói: {DSDK.name}</div>
                       <div className="CSCT_ChiTiet_Des">{DSDK.description}</div>
                       
                       </div> : <></>
                    })}
                </div>

            }
        </div>
    </div>
}

export default CSCT