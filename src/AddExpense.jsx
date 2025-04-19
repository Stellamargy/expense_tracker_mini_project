import React from "react";
import DisplayExpenses from "./DisplayExpenses";
import ExpenseForm from "./components/ExpenseForm"
function AddExpense() {
  return (
    <section className="form-section  w-25 ">
       <ExpenseForm />
    </section>
  );
}

export default AddExpense;
