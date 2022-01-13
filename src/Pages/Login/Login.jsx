import React from 'react'
import LoginCSS from "./login.module.css"
import logoBranding from '../../Assets/iskolar_dasma_logo.png'
import { IoArrowForwardOutline } from "react-icons/io5";
import { MdOutlineEmail, MdLockOutline } from "react-icons/md";
import { useNavigate } from 'react-router-dom'

function Login() {
    let navigate = useNavigate()
    return (
        <div className={LoginCSS.login}>
            <img src={logoBranding} alt="" />
            <h1>Iskolar Dasma</h1>
            <label htmlFor="email"> E-mail</label>
            <div className={LoginCSS.inputGroup}>
                <input className='input' type="text" name='email' placeholder='your@email.com' />
                <MdOutlineEmail size={22} style={{ marginLeft: "-35px" }} />
            </div>
            <label htmlFor="password"> Password</label>
            <div className={LoginCSS.inputGroup}>
                <input className='input' type="text" name='password' placeholder='********' />
                <MdLockOutline size={22} style={{ marginLeft: "-35px" }} />
            </div>
            <button onClick={()=> navigate("/dashboard/home") }>Login <IoArrowForwardOutline size={20} style={{ marginLeft: "5px" }} /> </button>
        </div>
    )
}

export default Login
