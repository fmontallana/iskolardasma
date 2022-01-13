import React from 'react';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import BtnGradient from '../Components/BtnGradient';
import { useNavigate } from 'react-router-dom';

export default function TransactionConfirm({transaction}) {
    let navigate = useNavigate();

    return (
        
        <div className='transactionConfirm' >
            <IoMdCheckmarkCircleOutline size={120} color='#21C6E9'/>
            <h3>{transaction} Successful!</h3>
            {transaction==="Request" && <p style={{textAlign:"center"}}>Withdrawal status will be on pending, please wait for admin to process your request.</p>}
            <BtnGradient
                text={"Return Home"}
                style={{
                    height: "50px",
                    width: "50%",
                    border: "transparent",
                    borderRadius: "10px",
                    color: "#fff",
                    fontSize: "1rem",
                    marginTop: "20px"
                    
                }}
                onClick={() => navigate("/dashboard/home")} />
        </div>
    );
}

