import React, { useState, useContext, useEffect } from "react";
import LoginCSS from "./login.module.css";
import logoBranding from "../../Assets/iskolar_dasma_logo.png";
import { IoArrowForwardOutline } from "react-icons/io5";
import { MdOutlineEmail, MdLockOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { collection, getDocs, where, query, orderBy } from "firebase/firestore";
import { db } from "../../firebase-config";
import { TransactionContext } from '../../Context/TransactionContext'


function Login({ setIsLoggedIn }) {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [transactionsData, setTransactionsData] = useContext(TransactionContext)

  const studentCollectionRef = collection(db, "students");

  const handleEmail = (email) => {
    setEmail(email);
  };

  const handlePassword = (pass) => {
    setPassword(pass);
  };

  const login = async () => {
    const data = await getDocs(studentCollectionRef);
    data.docs.forEach((student) => {
      if (
        email === student.data().email &&
        password === student.data().password
      ) {
        sessionStorage.setItem(
          "user",
          JSON.stringify({
            isLoggedIn: true,
            studentID: student.id,
            account_number: student.data().account_number
          })
        );
        setIsLoggedIn(true)
      }
      console.log(student.data())
      getTransactions(student.data().account_number)

        navigate('/dashboard/home')
    });
  };

  const getTransactions = async (account_number) => {
    // let acct_number = JSON.parse(sessionStorage.getItem('user')).account_number
    const transactionsCollectionRef = collection(db, "transactions")
    const q = query(transactionsCollectionRef, where("sender", "==", account_number), orderBy("_added_on", "desc"));
    const data = await getDocs(q)
    setTransactionsData(data.docs)
    // setTransactionsData((prev) => {
    //   return { ...prev, ...data.docs }
    // })
    console.log(data.docs)
    console.log(transactionsData)
  }
  // const getTransactions = async (account_number) => {
  //   // const account_number = JSON.parse(sessionStorage.getItem('user')).account_number
  //   const transactionsCollectionRef = collection(db, "transactions")
  //   // const sender = query(transactionsCollectionRef, where("sender","==",account_number), orderBy("_added_on","desc"));
  //   const receiver = query(transactionsCollectionRef, where("receiver","==",account_number), orderBy("_added_on","desc"));

  //   // const sdata = await (await getDocs(sender)).docs
  //   const rdata = await (await getDocs(receiver)).docs

  //   // setTransactionsData(prev => {
  //   //   return {
  //   //     ...prev, sdata
  //   //   }
  //   // })

  //   setTransactionsData(prev => {
  //     return {
  //       ...prev, rdata
  //     }
  //   })
  // }


  return (
    <div className={LoginCSS.login}>
      <img src={logoBranding} alt="" />
      <h1>Iskolar Dasma</h1>
      <label htmlFor="email"> E-mail</label>
      <div className={LoginCSS.inputGroup}>
        <input
          onChange={(e) => handleEmail(e.target.value)}
          className="input"
          type="email"
          name="email"
          placeholder="your@email.com"
        />
        <MdOutlineEmail size={22} style={{ marginLeft: "-35px" }} />
      </div>
      <label htmlFor="password"> Password</label>
      <div className={LoginCSS.inputGroup}>
        <input
          onChange={(e) => handlePassword(e.target.value)}
          className="input"
          type="password"
          name="password"
          placeholder="********"
        />
        <MdLockOutline size={22} style={{ marginLeft: "-35px" }} />
      </div>
      <button type="submit" onClick={() => login()}>
        Login <IoArrowForwardOutline size={20} style={{ marginLeft: "5px" }} />{" "}
      </button>
    </div>
  );
}

export default Login;
