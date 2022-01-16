import React, { useContext, useEffect} from "react";
import "./Transactions.css";
import { Link } from "react-router-dom";
import {TransactionContext} from '../Context/TransactionContext'
import { collection, orderBy, where, query , getDocs} from "firebase/firestore";
import Transaction from "./Transaction";
import { db } from "../firebase-config";


function Transactions() {

  const [transactionsData, setTransactionsData ] = useContext(TransactionContext)
  const getTransactions = async () => {
    let acct_number = JSON.parse(sessionStorage.getItem('user')).account_number
    const transactionsCollectionRef = collection(db, "transactions")
    const receiver = where("receiver", "==", acct_number)
    const sender = where("sender","==",acct_number)
    const orderedBy = orderBy("_added_on","desc");
    const qry = query(transactionsCollectionRef,sender,orderedBy )
    const data = await getDocs(qry)
    // setTransactionsData(data.docs)
    setTransactionsData(data.docs)
    console.log(data.docs)
    console.log(transactionsData)
  }

  useEffect(()=>{
    getTransactions()
  },[])
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
              // if (data.data().sender===account_number) {
              //   return <>send money</>
              // }
              // if (data.data().receiver===account_number) {
              //   return <>receive money</>
              // }
              return (
                <Transaction
                  key={index}
                  color={data.data().type=="receive"? "green":'red'}
                  typeDescription={data.data().title}
                  date={newDate}
                  typeLabel={data.data().receiver}
                  amount={data.data().type=="receive"? data.data().amount.toLocaleString("en-US"):`-₱${data.data().amount.toLocaleString("en-US")}` }
                />
              )
            })
          }
        </div>
      </div>
    </>
  );
}

export default Transactions;
