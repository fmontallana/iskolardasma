import React from 'react'
import './Services.css'
import { BiHistory } from "react-icons/bi";
import { GiPayMoney, GiReceiveMoney } from "react-icons/gi";
import { CgOptions } from "react-icons/cg";
import { useNavigate } from 'react-router-dom'

function Services() {
    let navigate = useNavigate()
    return (
        <div className='services'>
            
            <h4>Services</h4>
            <div className="services-group">
                <div className="icon" onClick={()=> navigate("/send_money")}>
                    <GiPayMoney size={35} style={{color:"#79fc86"}} />
                </div>
                <label htmlFor="">Send <br />Money</label>
            </div>
            <div className="services-group"  >
                <div className="icon" onClick={()=> navigate("/withdraw")}>
                    <GiReceiveMoney size={35} style={{color:"#5be9a7"}} />
                </div>
                <label htmlFor="">Request <br /> Withdrawal</label>
            </div>
            <div className="services-group">
                <div className="icon" onClick={()=> navigate("/dashboard/transaction")}>
                    <BiHistory size={35} style={{color:"#3dd7c9"}} />
                </div>
                <label htmlFor="">Account <br /> Transaction</label>
            </div>
            <div className="services-group">
                <div className="icon">
                    <CgOptions size={35} style={{color:"#22c1e2"}} />
                </div>
                <label htmlFor="">More <br /> Options</label>
            </div>

        </div>
    )
}

export default Services
