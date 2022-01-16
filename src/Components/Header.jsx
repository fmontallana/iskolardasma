import React from "react";
import "./Header.css";
import logoBranding from "../Assets/iskolar_dasma_logo.png";
import { IoMdExit } from "react-icons/io";

function Header() {
  const logout = () => {
    sessionStorage.clear();
    window.location.href = "/";
  };

  return (
    <div className="header">
      <img src={logoBranding} alt="" />
      <h2>Iskolar Dasma</h2>
      <IoMdExit size={35} onClick={() => logout()} />
    </div>
  );
}

export default Header;
