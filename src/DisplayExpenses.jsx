import React from "react";
import ExpenseSearh from '.components/ExpenseSearch';
import ExpenseList from "./components/ExpenseList"

const DisplayExpenses = () => {
  return (
    <section className="display-expenses">
      <section className="search-expense">
        <ExpenseSearh />
      </section>
      <section className="table-expense">
        < ExpenseList />

      </section>
    </section>
  );
};

export default DisplayExpenses;
