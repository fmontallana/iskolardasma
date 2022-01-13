import React from 'react'
import './SendMoney.css'
import { IoChevronBack } from 'react-icons/io5'
import BtnGradient from './BtnGradient'
import { useNavigate } from 'react-router-dom'

function SendMoney() {
    let navigate = useNavigate()
    return (
        <>
        <div className="sendMoney">
            <IoChevronBack size={25} onClick={()=> navigate("/dashboard/home")} />
            <h4>Send Money</h4>

            <div className="sendMoneyFields">
                <h6>Send to *</h6>
                <input type="text" placeholder='Enter Account Number: Ex. 2018-1234' />
                <h6>Amount *</h6>
                <input type="text" placeholder='Enter Amount'/>
                <BtnGradient 
                text={"Next"} 
                style={{
                    height:"50px",
                    width:"100%",
                    marginTop:"20px",
                    border:"transparent",
                    borderRadius:"10px",
                    color:"#fff",
                    fontSize:"1rem"
                    }} 
                onClick={()=> navigate("/send_money/confirm")}/>
            </div>
        </div>
        </>
    )
}

export default SendMoney
