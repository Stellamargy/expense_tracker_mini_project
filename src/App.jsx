import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ExpenseList from "./components/ExpenseList";
import ExpenseSearch from "./components/ExpenseSearch";
import ExpenseForm from "./components/ExpenseForm";

const App = () => {
  return (
    <div className="app-container h-100  d-flex flex-column border border-danger ">
      <header className="app-header container border border-dark">
        <div className="header-info-wrapper">
          <h1 className="expense-app-name ">Expense Tracker</h1>
          <p className="expense-app-about  ">
            Track your daily expenses and take control of your finances with
            this simple, easy-to-use budgeting app.
          </p>
        </div>
      </header>
      <main className="main-content flex-grow-1 container border border-info  ">
        <div className="row">
          <section className="add-expense-section col-12 col-md-3 border border-warning">
            <ExpenseForm />
          </section>
          <section className="display-expense-section col-12 col-md-9 border border-warning">
            <div className="search-expense-wrapper">
              <ExpenseSearch />
            </div>
            <div className="expense-list-wrapper">
              <ExpenseList />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default App;
