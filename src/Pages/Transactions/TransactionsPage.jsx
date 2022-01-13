import React from 'react'
import Header from '../../Components/Header'
import Transaction from '../../Components/Transaction'
import './Transaction.css'

function TransactionsPage() {
    return (
        <>
            <Header />
            <h4 style={{ textAlign: "center", marginTop: "10px" }}>Transaction History</h4>
            <div className='transactionsPage'>
                <Transaction color="red" typeDescription="Withdraw Money from" date="10 January, 2022" typeLabel="Request Withdrawal" amount="5,000" />
                <Transaction color="red" typeDescription="Withdraw Money from" date="05 January, 2022" typeLabel="Request Withdrawal" amount="10,000" />
                <Transaction color="green" typeDescription="Received Money from" date="01 December, 2021" typeLabel="Scholarship Funds" amount="6,000" />
                <Transaction color="red" typeDescription="Withdraw Money from" date="15 October, 2021" typeLabel="Request Withdrawal" amount="5,000" />
                <Transaction color="red" typeDescription="Withdraw Money from" date="08 October, 2021" typeLabel="Request Withdrawal" amount="5,000" />
                <Transaction color="red" typeDescription="Withdraw Money from" date="10 January, 2022" typeLabel="Request Withdrawal" amount="5,000" />
                <Transaction color="red" typeDescription="Withdraw Money from" date="05 January, 2022" typeLabel="Request Withdrawal" amount="10,000" />
                <Transaction color="green" typeDescription="Received Money from" date="01 December, 2021" typeLabel="Scholarship Funds" amount="6,000" />
                <Transaction color="red" typeDescription="Withdraw Money from" date="15 October, 2021" typeLabel="Request Withdrawal" amount="5,000" />
                <Transaction color="red" typeDescription="Withdraw Money from" date="08 October, 2021" typeLabel="Request Withdrawal" amount="5,000" />
                <Transaction color="red" typeDescription="Withdraw Money from" date="10 January, 2022" typeLabel="Request Withdrawal" amount="5,000" />
                <Transaction color="red" typeDescription="Withdraw Money from" date="05 January, 2022" typeLabel="Request Withdrawal" amount="10,000" />
                <Transaction color="green" typeDescription="Received Money from" date="01 December, 2021" typeLabel="Scholarship Funds" amount="6,000" />
                <Transaction color="red" typeDescription="Withdraw Money from" date="15 October, 2021" typeLabel="Request Withdrawal" amount="5,000" />
                <Transaction color="red" typeDescription="Withdraw Money from" date="08 October, 2021" typeLabel="Request Withdrawal" amount="5,000" />
                <Transaction color="red" typeDescription="Withdraw Money from" date="10 January, 2022" typeLabel="Request Withdrawal" amount="5,000" />
                <Transaction color="red" typeDescription="Withdraw Money from" date="05 January, 2022" typeLabel="Request Withdrawal" amount="10,000" />
                <Transaction color="green" typeDescription="Received Money from" date="01 December, 2021" typeLabel="Scholarship Funds" amount="6,000" />
                <Transaction color="red" typeDescription="Withdraw Money from" date="15 October, 2021" typeLabel="Request Withdrawal" amount="5,000" />
                <Transaction color="red" typeDescription="Withdraw Money from" date="08 October, 2021" typeLabel="Request Withdrawal" amount="5,000" />

            </div>
        </>

    )
}

export default TransactionsPage
