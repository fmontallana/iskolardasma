import React, { useEffect } from "react";
import "./dashboard.css";
import { Outlet, useNavigate } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineHistory,
  AiOutlineUser,
  AiOutlineBell,
} from "react-icons/ai";

function Dashboard() {
  let navigate = useNavigate();

  useEffect(() => {
    if (sessionStorage.getItem("user") == null) {
      navigate("/");
    }
  }, []);

  return (
    <>
      <Outlet />

      <div className="footer">
        <div className="group" onClick={() => navigate("/dashboard/home")}>
          <AiOutlineHome color="#516365" size={30} />
        </div>
        <div
          className="group"
          onClick={() => navigate("/dashboard/transaction")}
        >
          <AiOutlineHistory color="#516365" size={30} />
        </div>
        <div
          className="group"
          onClick={() => navigate("/dashboard/notification")}
        >
          <AiOutlineBell color="#516365" size={30} />
        </div>
        <div className="group" onClick={() => navigate("/dashboard/profile")}>
          <AiOutlineUser color="#516365" size={30} />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
