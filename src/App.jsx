import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ExpenseList from "./components/ExpenseList";
import ExpenseSearch from "./components/ExpenseSearch";
import ExpenseForm from "./components/ExpenseForm";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="app-container h-100  d-flex flex-column  ">
      < Header />
      <main className="main-content flex-grow-1 container  ">
        <div className="row">
          <section className="add-expense-section col-12 col-lg-4 mt-4 mt-lg-0">
            <ExpenseForm />
          </section>
          <section className="display-expense-section col-12 col-lg-8  ">
            <div className="search-expense-wrapper mt-4 mt-lg-0  ">
              <ExpenseSearch />
            </div>
            <div className="expense-list-wrapper mt-4">
              <ExpenseList />
            </div>
            
          </section>
        </div>
      </main>
    </div>
  );
};

export default App;
