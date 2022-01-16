import React, { createContext, useState } from "react";
import { Route } from "react-router-dom";

export const TransactionContext = createContext()

export const TransactionContextProvider = (props) => {
    
    const [transactionsData, setTransactionsData] = useState([])


    
    return (
        <TransactionContext.Provider value={[transactionsData, setTransactionsData]}>
            {props.children}
        </TransactionContext.Provider>
    )
}
