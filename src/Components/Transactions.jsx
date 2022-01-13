import React from 'react'
import Transaction from './Transaction'
import './Transactions.css'
import { useNavigate, Link } from 'react-router-dom'

function Transactions() {
    let navigate = useNavigate()
    return (
        <>
            
            <div className="transactions">
            <h4>Recent Activities</h4>
            <Link to={"/dashboard/transaction"}>View All</Link>

            </div>
            <div className='transactions'>
                <div className="container">
                    <Transaction color="red" typeDescription="Withdraw Money from" date="10 January, 2022" typeLabel="Request Withdrawal" amount="5,000"  />
                    <Transaction color="red" typeDescription="Withdraw Money from" date="05 January, 2022" typeLabel="Request Withdrawal" amount="10,000" />
                    <Transaction color="green" typeDescription="Received Money from" date="01 December, 2021" typeLabel="Scholarship Funds" amount="6,000"  />
                    <Transaction color="red" typeDescription="Withdraw Money from" date="15 October, 2021" typeLabel="Request Withdrawal" amount="5,000"  />
                    <Transaction color="red" typeDescription="Withdraw Money from" date="08 October, 2021" typeLabel="Request Withdrawal" amount="5,000" />
                </div>
            </div>
        </>
    )
}

export default Transactions

