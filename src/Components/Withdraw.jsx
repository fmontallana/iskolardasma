import React from 'react'
import './SendMoney.css'
import { IoChevronBack } from 'react-icons/io5'
import BtnGradient from './BtnGradient'
import { useNavigate } from 'react-router-dom'

function Withdraw() {
    let navigate = useNavigate()
    return (
        <div className="sendMoney">
            <IoChevronBack size={25} onClick={() => navigate("/dashboard/home")} />
            <h4>Request Withdrawal</h4>

            <div className="withdraw">
                <div className="withdrawContainer group1">
                    <label htmlFor="">Amount *</label>
                    <input type="text" placeholder='Enter amount' />
                    <label htmlFor="">Withdraw Method</label>
                    <div className="inputGroup">
                        <input type="radio" name="method" id="gcash" value="gcash" />
                        <label htmlFor="gcash">Gcash</label>
                        <input type="radio" name="method" id="landbank" value="landbank" />
                        <label htmlFor="landbank">Landbank</label>
                    </div>
                </div>
                <p>Account Details</p>
                <div className="withdrawContainer group2">
                    <label htmlFor="">Account Name *</label>
                    <input type="text" placeholder='Juan Dela Cruz' />
                    <label htmlFor="">Account Number</label>
                    <input type="text" placeholder='Enter account number' />
                </div>
                <p style={{
                            marginTop:"20px",
                            fontSize:".8rem",
                            textAlign:"center",
                            color:"#636363"
                        }}><b>NOTE:</b> Always check the Account Name and Account Number of the transaction to avoid loss of funds.</p>
                <BtnGradient
                    text={"Next"}
                    style={{
                        height: "50px",
                        width: "100%",
                        border: "transparent",
                        borderRadius: "10px",
                        color: "#fff",
                        fontSize: "1rem"
                    }}
                    onClick={() => navigate("/withdraw/confirm")} />
            </div>
        </div>
    )
}

export default Withdraw
