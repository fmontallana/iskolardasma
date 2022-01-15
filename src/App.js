import { useState, useEffect } from "react";
import "./App.css";
import { Dashboard, Login } from "./Pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Balance from "./Components/Balance";
import Services from "./Components/Services";
import Transactions from "./Components/Transactions";
import TransactionsPage from "./Pages/Transactions/TransactionsPage";
import Notifications from "./Pages/Notifications/Notifications";
import Profile from "./Pages/Profile/Profile";
import SendMoney from "./Components/SendMoney";
import SendMoneyConfirm from "./Components/SendMoneyConfirm";
import Withdraw from "./Components/Withdraw";
import TransactionConfirm from "./Components/TransactionConfirm";
import { db } from "./firebase-config";
import { collection, getDocs } from "firebase/firestore";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [studentInfo, setStudentInfo] = useState({});
  const studentsCollectionRef = collection(db, "students");
  useEffect(() => {
    if (sessionStorage.getItem("user") != null) {
      setIsLoggedIn(true);
    }
  }, []);



  useEffect(() => {
    const getStudents = async () => {
      const data = await getDocs(studentsCollectionRef);
      data.docs.forEach((doc) => {

        if (doc.id === JSON.parse(sessionStorage.getItem('user')).studentID) {
  
          setStudentInfo(doc.data())
        }

      })

    };

    getStudents();
  }, [isLoggedIn]);

  return (
    <Router>
      <div className="wrapper">
        <Routes>
          <Route path="dashboard" element={<Dashboard studentInfo={studentInfo} />}>
            <Route
              path="home"
              element={
                <>
                  <Header />
                  <Balance studentInfo={studentInfo} />
                  <Services />
                  <Transactions />
                </>
              }
            />
            <Route path="transaction" element={<TransactionsPage />} />
            <Route path="notification" element={<Notifications />} />
            <Route
              path="profile"
              element={<Profile studentInfo={studentInfo} />}
            />
          </Route>
          <Route path="send_money" element={<SendMoney studentInfo={studentInfo} currentBalance={5000} />} />
          <Route path="send_money/confirm" element={<SendMoneyConfirm />} />
          <Route path="withdraw" element={<Withdraw />} />
          <Route
            path="withdraw/confirm"
            element={<TransactionConfirm transaction={"Request"} />}
          />
          <Route
            path="send_money/success"
            element={<TransactionConfirm transaction={"Send Money"} />}
          />

          <Route path="/" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="*" element={<h1>Error! Page Not Found.</h1>} />
        </Routes>
      </div>
      <div className="custom-shape-divider-bottom-1641908690">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            class="shape-fill"
          ></path>
        </svg>
        <div className="whiteBlock"></div>
      </div>
    </Router>
  );
}

export default App;
