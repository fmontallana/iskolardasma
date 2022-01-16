
import { collection, onSnapshot, orderBy, query, where } from "firebase/firestore"
import { useState } from "react"
import { db } from "./firebase-config"


export const GetTransactionData = async (accountNumber)=> {
    const [result, setResult] = useState([])

    const transactionCollectionRef = collection(db,"transactions")
    const sender = where('sender', '==', accountNumber)
    const receiver = where('receiver', '==', accountNumber)
    const orderedBy = orderBy("_added_on", "desc")
    const qry = query(transactionCollectionRef,sender,orderedBy )
    // const result = []
    await onSnapshot(qry, (snapshot)=>{
        snapshot.forEach((transaction)=>{
            setResult(transaction.data())
        })
    })
    
}

