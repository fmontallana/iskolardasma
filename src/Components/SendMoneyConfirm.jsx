import React from 'react'
import './SendMoney.css'
import BtnGradient from './BtnGradient'
import { IoChevronBack } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'


function SendMoneyConfirm() {
    let navigate = useNavigate()
    return (
        <>
        
            <div className="sendMoney">
            <IoChevronBack size={25} onClick={()=> navigate("/send_money")} />
            <h4>Send Money</h4>
                <div className='sendMoneyConfirmDetails'>
                    <img src="https://i.pravatar.cc/100" alt=""  style={{borderRadius:"100%"}}/>
                    <h4>Fernando Montallana</h4>
                    <p>2018-3214</p>
                    <div className="fields">
                        <div className="currentBal">
                            <p style={{color:"#636363"}}>Current Balance</p>
                            <p>PHP 10,000</p>
                        </div>
                        <p style={{fontSize:".8rem", fontWeight:"bold", color:"#636363", marginBottom:"-5px"}}>YOU ARE ABOUT TO SEND</p>

                        <div className="totalBal">
                            <p style={{color:"#636363"}}>Total Amount</p>
                            <p>PHP 5,000</p>
                        </div>
                        <p style={{
                            marginTop:"20px",
                            fontSize:".8rem",
                            textAlign:"center",
                            color:"#636363"
                        }}><b>NOTE:</b> Always check the Name and Scholar ID of the transaction to avoid loss of funds.</p>
                        <BtnGradient 
                        onClick={()=> navigate("/send_money/success")}
                        text={"Send"} 
                        style={{
                            width:"100%",
                            height:"50px",
                            border: " transparent",
                            borderRadius: "10px"
                        }} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default SendMoneyConfirm
