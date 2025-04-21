import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ExpenseList from "./components/ExpenseList";
import ExpenseSearch from "./components/ExpenseSearch";
import ExpenseForm from "./components/ExpenseForm";

const App = () => {
  return (
    <div className="app-container ">
      <header className="app-header">
        <div className="header-info-wrapper">
          <h1 className="expense-app-name ">Expense Tracker</h1>
          <p className="expense-app-about  ">
            Track your daily expenses and take control of your finances with
            this simple, easy-to-use budgeting app.
          </p>
        </div>
      </header>
      <main className="main-content ">
        <section className="add-expense-section">
          <ExpenseForm />
        </section>
        <section className="display-expense-section">
          <div className="search-expense-wrapper">
            <ExpenseSearch />
          </div>
          <div className="expense-list-wrapper">
            <ExpenseList />
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
