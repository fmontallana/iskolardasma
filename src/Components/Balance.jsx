import React from 'react'
import './Balance.css'
import { MdCheckCircle } from 'react-icons/md'

function Balance() {
    return (
        <div className='balance-wrapper'>
            <div className='balance'>
                <h4>Rommel Cazeñas</h4>
                <div className="current-balance">
                    <h2>5,000</h2>
                    <p>Current Balance</p>
                </div>
                <div className="status">
                    <MdCheckCircle size={30} color='#519E62' />
                    <p>Active</p>
                </div>
                <p>317 Sabang Dasmariñas City, Cavite</p>
                <p>4th Year Student</p>
            </div>
        </div>

    )
}

export default Balance
