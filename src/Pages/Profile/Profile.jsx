import React, { useState, useEffect } from "react";
import Header from "../../Components/Header";
import "./Profile.css";

function Profile({ studentInfo }) {
  if (studentInfo[0] == null) {
    window.location.href = "/";
  }

  return (
    <>
      <Header />
      <h3
        style={{
          // margin: "20px 0",
          textAlign: "center",
        }}
      >
        Profile
      </h3>
      <div className="profile transactionsPage">
        <div className="profileStatus">
          <p>{`${studentInfo[0].school_year} YEAR STUDENT`}</p>
          <p style={{ textTransform: "uppercase" }}>
            {studentInfo[0].account_status}
          </p>
        </div>
        <div className="profileName">
          <h4>Scholar's Name</h4>
          <h1>{studentInfo[0].name}</h1>
        </div>
        <div className="profileAccountNumber">
          <h4>Account Number</h4>
          <h2>{studentInfo[0].account_number}</h2>
        </div>
        <h3>Scholar Information</h3>
        <div className="basicDetails">
          <label>Address:</label>
          <p>{studentInfo[0].address}</p>
          <label>Birthday:</label>
          <p>{"birthday"}</p>
          <label>Course:</label>
          <p>{studentInfo[0].course}</p>
          <label>School:</label>
          <p>{studentInfo[0].school}</p>
          <hr />
          <label>Mobile Number:</label>
          <p>{studentInfo[0].mobile_number}</p>
          <hr />
          <label>E-mail:</label>
          <p>{studentInfo[0].email}</p>
        </div>
        <button>Edit Details</button>
      </div>
    </>
  );
}

export default Profile;
