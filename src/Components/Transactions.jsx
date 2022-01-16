import React, { useContext, useEffect} from "react";
import Transaction from "./Transaction";
import "./Transactions.css";
import { Link } from "react-router-dom";
import {TransactionContext} from '../Context/TransactionContext'
import { collection, orderBy, where, query , getDocs} from "firebase/firestore";
import { db } from "../firebase-config";


function Transactions() {

  const [transactionsData, setTransactionsData] = useContext(TransactionContext)
  const account_number = JSON.parse(sessionStorage.getItem('user')).account_number

  return (
    <>
      <div className="transactions">
        <h4>Recent Activities</h4>
        <Link to={"/dashboard/transaction"}>View All</Link>
      </div>
      <div className="transactions">
        <div className="container">
          {
            transactionsData.map((data, index)=>{
              console.log()
              const date = new Date(data.data()._added_on.toDate().toString())
              const newDate = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`
              console.log(transactionsData)
              if (data.data().sender===account_number) {
                return <>send money</>
              }
              if (data.data().receiver===account_number) {
                return <>receive money</>
              }
              // return (
              //   <Transaction
              //     key={index}
              //     color={data.data().type=="receive"? "green":'red'}
              //     typeDescription={data.data().title}
              //     date={newDate}
              //     typeLabel={data.data().receiver}
              //     amount={data.data().type=="receive"? data.data().amount.toLocaleString("en-US"):`-₱${data.data().amount.toLocaleString("en-US")}` }
              //   />
              // )
            })
          }
        </div>
      </div>
    </>
  );
}

export default Transactions;
