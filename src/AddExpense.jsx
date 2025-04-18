import React from "react";
import DisplayExpenses from "./DisplayExpenses";
import ExpenseForm from "./components/ExpenseForm"
function AddExpense() {
  return (
    <section className="form-section">
       <ExpenseForm />
    </section>
  );
}

export default AddExpense;
