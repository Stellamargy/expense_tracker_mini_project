import React from "react";
import ExpenseSearh from "./components/ExpenseSearch";
import ExpenseList from "./components/ExpenseList";

const DisplayExpenses = () => {
  return (
    <section className="display-expenses ">
      <div className="">
        <section className="search-expense ">
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
