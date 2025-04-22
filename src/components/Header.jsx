import React from "react";

const Header = () => {
  return (
    <header className="app-header  ">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-9 col-lg-6 ">
            <h1 className="expense-app-name fw-bold mt-2 mb-0">Expense Tracker</h1>
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
