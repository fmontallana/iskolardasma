import React from "react";
import "./Balance.css";
import { MdCheckCircle } from "react-icons/md";

function Balance({studentInfo}) {
  //   if (studentInfo[0] == null) {
  //     window.location.href = "/";
  //   }
  console.log(studentInfo)
  return (
    <div className="balance-wrapper">
      <div className="balance">
        <h4>{studentInfo.name}</h4>
        <div className="current-balance">
          <h2>5,000</h2>
          <p>Current Balance</p>
        </div>
        <div className="status">
          <MdCheckCircle size={30} color="#519E62" />
          <p>{studentInfo.account_status}</p>
        </div>
        <p>{studentInfo.address}</p>
        <p> {studentInfo.school_year} Year Student</p>
      </div>
    </div>
  );
}

export default Balance;
