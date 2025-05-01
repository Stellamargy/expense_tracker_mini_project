import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ExpenseList from "./components/ExpenseList";
import ExpenseSearch from "./components/ExpenseSearch";
import ExpenseForm from "./components/ExpenseForm";
import Header from "./components/Header";
// import expenseData from "./data/expenseData";
import { useState } from "react";
import { useEffect } from "react";
const storedItems=[
  {
    expenseDate: "2025-04-09",
    expenseName: "Internet Bill",
    expenseDescription: "Monthly internet bill",
    expenseCategory: "Utilities",
  },
  {
    expenseDate: "2025-04-10",
    expenseName: "Movie Ticket",
    expenseDescription: "Movie night with friends",
    expenseCategory: "Entertainment",
  },
]

const App = () => {
  const [expenses, setExpenses] = useState([]);
  // Create local storage once
  useEffect(() => {
    const expenseData = localStorage.getItem("expenses");
    if (expenseData) {
      setExpenses(JSON.parse(expenseData));
    } else {
      localStorage.setItem(
        "expenses",
        JSON.stringify(storedItems)
      );
      setExpenses(storedItems);
    }
  }, []);

  const handleAddExpense = () => {};

  return (
    <div className="app-container h-100 d-flex flex-column">
      <Header />
      <main className="main-content flex-grow-1 container">
        <div className="row">
          <section className="add-expense-section col-12 col-lg-4 mt-4 mt-lg-0">
            <ExpenseForm handleAddExpense={handleAddExpense} />
          </section>
          <section className="display-expense-section col-12 col-lg-8">
            <section className="search-expense-wrapper mt-4 mt-lg-0">
              <ExpenseSearch />
            </section>
            <section className="expense-list-wrapper mt-1">
              <h2 className="fw-bolder text-danger h-6">Expenses</h2>
              <ExpenseList expenses={expenses} />
            </section>{" "}
            {/* ✅ Fixed this closing tag */}
          </section>
        </div>
      </main>
    </div>
  );
};

export default App;
