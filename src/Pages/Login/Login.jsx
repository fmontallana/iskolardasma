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
    console.log(data.docs)

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
        console.log(student.data())
        getTransactions()
        navigate('/dashboard/home')
      }

    });
  };

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
    login()
    getTransactions()
  },[])

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
      
      <button type="submit" onClick={() => login()  }>
        Login <IoArrowForwardOutline size={20} style={{ marginLeft: "5px" }} />{" "}
      </button>
    </div>
  );
}

export default Login;
