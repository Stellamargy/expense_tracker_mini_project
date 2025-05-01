import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins, faMoneyBill1Wave } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header className="app-header  ">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-9 col-lg-6 ">
            <h1 className="expense-app-name fw-bold mt-2 mb-0 display-5">
              Expense Tracker
              <FontAwesomeIcon icon={faMoneyBill1Wave} className="ms-2 text-danger"></FontAwesomeIcon>
            </h1>
           
            <p className="expense-app-about fw-light ">
              Track your daily expenses and take control of your finances with
              this simple, easy-to-use budgeting app.
             
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
