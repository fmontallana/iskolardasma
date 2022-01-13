import React from 'react'
import './Header.css'
import logoBranding from '../Assets/iskolar_dasma_logo.png'
import {MdOutlineSettings} from 'react-icons/md'

function Header() {
    return (
        <div className='header'>
            <img src={logoBranding} alt="" />
            <h2>Iskolar Dasma</h2>
            <MdOutlineSettings size={35} />
        </div>
    )
}

export default Header
