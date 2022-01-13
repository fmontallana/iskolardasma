import React from 'react'
import './Transactions.css'

function Transaction({typeDescription, date, typeLabel, amount, color }) {
    return (
        <div className='transaction'>
            <p className='type-description'>{typeDescription}</p>
            <p className='date'>{date}</p>
            <h4 className='type-label'>{typeLabel}</h4>
            <h4 className={`amount ${color}`} >{amount}</h4> 
        </div>
    )
}

export default Transaction
