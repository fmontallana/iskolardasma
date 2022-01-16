import React, { useContext} from "react";
import Header from '../../Components/Header'
import Transaction from '../../Components/Transaction'
import './Transaction.css'
import {TransactionContext} from '../../Context/TransactionContext'

function TransactionsPage() {

  const [transactionsData] = useContext(TransactionContext)

    return (
        <>
            <Header />
            <h4 style={{ textAlign: "center", marginTop: "10px" }}>Transaction History</h4>
            <div className='transactionsPage'>
            {
            transactionsData.map((data, index)=>{
              console.log()
              const date = new Date(data.data()._added_on.toDate().toString())
              const newDate = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`
              return (
                <Transaction
                  key={index}
                  color={data.data().type==="receive"? "green":'red'}
                  typeDescription={data.data().title}
                  date={newDate}
                  typeLabel={data.data().receiver}
                  amount={data.data().type==="receive"? data.data().amount:`-${data.data().amount}` }

                />
              )
            })
          }
            </div>
        </>

    )
}

export default TransactionsPage
