import React from "react";

function ExpenseForm() {
  return (
    <div className="card shadow-sm p-4">
      <h5 className="mb-2 fw-bold">Add Expense</h5>
      <form>
        <div className="mb-2">
          <label htmlFor="expenseName" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control form-control-md"
            id="expenseName"
            placeholder="e.g. Grocery shopping"
          />
        </div>

        <div className="mb-2">
          <label htmlFor="expenseDescription" className="form-label">
            Description
          </label>
          <textarea
            className="form-control form-control-md"
            id="expenseDescription"
            rows="3"
            placeholder="Add any notes..."
          ></textarea>
        </div>

        <div className="mb-2">
          <label htmlFor="expenseAmount" className="form-label">
            Amount
          </label>
          <input
            type="number"
            className="form-control form-control-md"
            id="expenseAmount"
            placeholder="e.g. 2500"
          />
        </div>

        <div className="mb-2">
          <label htmlFor="expenseCategory" className="form-label">
            Category
          </label>
          <select className="form-select-sm" id="expenseCategory">
            <option value="">-- Select Category --</option>
            <option value="food">Food</option>
            <option value="transport">Transport</option>
            <option value="utilities">Utilities</option>
            <option value="entertainment">Entertainment</option>
          </select>
        </div>

        <div className="mb-2">
          <button type="submit" className="btn btn-primary w-100">
            Add Expense
          </button>
        </div>
      </form>
    </div>
  );
}

export default ExpenseForm;
