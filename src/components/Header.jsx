import React from "react";

const Header = () => {
  return (
    <header className="app-header  border border-dark">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-3 border">
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
