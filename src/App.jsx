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
const storedItems = [
  {
    expenseDate: "2025-04-09",
    expenseName: "Internet Bill",
    expenseDescription: "Monthly internet bill",
    expenseCategory: "Utilities",
    expenseAmount: 400,
  },
  {
    expenseDate: "2025-04-10",
    expenseName: "Movie Ticket",
    expenseDescription: "Movie night with friends",
    expenseCategory: "Entertainment",
    expenseAmount: 100,
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(() => {
    const data = localStorage.getItem("expenses");
    return data ? JSON.parse(data) : storedItems;
  });

  const [filterExpenses, setFilterExpense] = useState(expenses);
  const handleAddExpense = (formExpense) => {
    // I need to anticipate the new expense data after addition
    const newExpenses=[...expenses,formExpense]
    setExpenses((prev) => newExpenses);
    setFilterExpense(newExpenses)
  };

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const handleFilterExpense = (value) => {
    const filteredExpenses = expenses.filter(
      (expense) =>
        expense.expenseName.toLowerCase().includes(value) ||
        expense.expenseDescription.toLowerCase().includes(value)
    );
    setFilterExpense(filteredExpenses);
  };

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
              <ExpenseSearch handleFilterExpense={handleFilterExpense} />
            </section>
            <section className="expense-list-wrapper mt-1">
              <h2 className="fw-bolder text-danger h-6">Expenses</h2>
              <ExpenseList expenses={filterExpenses} />
            </section>
          </section>
        </div>
      </main>
    </div>
  );
};

export default App;
