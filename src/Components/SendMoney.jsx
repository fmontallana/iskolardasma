import React, { useState } from "react";
import "./SendMoney.css";
import { IoChevronBack } from "react-icons/io5";
import BtnGradient from "./BtnGradient";
import { useNavigate } from "react-router-dom";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../firebase-config";

function SendMoney({ currentBalance, studentInfo }) {
  let navigate = useNavigate();
  const [amount, setAmount] = useState(0);
  const [receiver, setReceiver] = useState("");

  const sendMoney = async () => {
    // const data = {
    //   account_number: "2018-0126",
    //   account_status: "active",
    //   address: "Dasmariñas City, Cavite",
    //   birthday: Timestamp.fromDate(new Date("November 20, 2000")),
    //   course: "BS Information Technology",
    //   email: "undoy@gmail.com",
    //   mobile_number: "09563524487",
    //   name: "John Ray Suico",
    //   password: "123456",
    //   school: "Cavite State University - Silang",
    //   school_year: "4th",
    // };

    const data = {
      _added_on: Timestamp.now(),
      sender_account_number: studentInfo[0].account_number,
      receiver_account_number: receiver,
      amount: amount,
    };

    await addDoc(collection(db, "sendMoney"), data);
    console.log("send money success " + data);
  };

  const handleAmount = (amount) => {
    setAmount(amount);
  };

  const handleReceiver = (receiver) => {
    setReceiver(receiver);
  };

  return (
    <>
      <div className="sendMoney">
        <IoChevronBack size={25} onClick={() => navigate("/dashboard/home")} />
        <h4>Send Money</h4>

        <div className="sendMoneyFields">
          <h6>Send to *</h6>
          <input
            required
            type="text"
            placeholder="Enter Account Number: Ex. 2018-1234"
            onChange={(e) => handleReceiver(e.target.value)}
          />
          <h6>Amount *</h6>
          <input
            required
            type="text"
            placeholder="Enter Amount"
            onChange={(e) => handleAmount(e.target.value)}
          />
          {amount === "" && receiver === "" ? (
            ""
          ) : (
            <BtnGradient
              isDisabled={(amount == "") & (receiver == "") ? true : false}
              text={"Next"}
              style={{
                height: "50px",
                width: "100%",
                marginTop: "20px",
                border: "transparent",
                borderRadius: "10px",
                color: "#fff",
                fontSize: "1rem",
              }}
              // onClick={() => navigate("/send_money/confirm")}
              onClick={() => sendMoney()}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default SendMoney;
