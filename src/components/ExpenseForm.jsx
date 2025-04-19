import React from "react";

function ExpenseForm() {
  return (
    <form className="expense-form  border border-light-subtle rounded container ">
        <h2 className="fs-4 mt-2 text-center">Add Expense</h2>
      <div className="mb-1">
        <label htmlFor="expense-name" className="form-label">
          Expense Name
        </label>
        <input
          type="text"
          className="form-control"
          id="expense-name"
          name="expense-name"
        />
      </div>
      <div className="mb-1">
        <label htmlForfor="expense-amount" className="form-label">
         Expense Amount
        </label>
        <input
          type="number"
          className="form-control"
          id="expense-amount"
          name="expense-amount"
        />
      </div>
      <div className="mb-1">
        <label htmlFor="expense-date" className="form-label">
          Expense Date
        </label>
        <input
          type="date"
          className="form-control"
          id="expense-date"
          name="expense-date"
        />
      </div>
      <div className="mb-1">
        <label for="expense-name" className="form-label">
          Email category
        </label>
        <input
          type="email"
          className="form-control"
          id="expense-name"
          name="expense-name"
        />
      </div>
      <div class="mb-2">
        <label htmlForfor="expense-description" class="form-label">
         Expense Description
        </label>
        <textarea class="form-control" id="expense-description" rows="3" name="expense-description"></textarea>
       
      </div>
      <div class="mb-1">
       <button className="btn btn-dark d-block w-100">
        Add Expense
       </button>
       
      </div>
    </form>
  );
}

export default ExpenseForm;
