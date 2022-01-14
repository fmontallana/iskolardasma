import React, { useState } from "react";
import LoginCSS from "./login.module.css";
import logoBranding from "../../Assets/iskolar_dasma_logo.png";
import { IoArrowForwardOutline } from "react-icons/io5";
import { MdOutlineEmail, MdLockOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase-config";

function Login() {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
          })
        );

        navigate("/dashboard/home");
      } else {
        console.log("invalid account");
      }
    });
  };

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
