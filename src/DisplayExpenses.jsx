import React from "react";
import ExpenseSearh from "./components/ExpenseSearch";
import ExpenseList from "./components/ExpenseList";

const DisplayExpenses = () => {
  return (
    <section className="display-expenses flex-grow-1  d-flex flex-column">
      <div className="container d-flex flex-column w-100">
        <section className="search-expense w-25">
          <ExpenseSearh />
        </section>
        <section className="table-expense">
          <ExpenseList />
        </section>
      </div>
    </section>
  );
};

export default DisplayExpenses;
