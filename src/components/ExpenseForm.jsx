import React from "react";
import { useState } from "react";

const initialFormState = {
  expenseDate: "",
  expenseName: "",
  expenseDescription: "",
  expenseCategory: "",
  expenseAmount: 0,
};

function ExpenseForm({ handleAddExpense }) {
  const [formData, setFormData] = useState(initialFormState);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    handleAddExpense(formData);
    setFormData(initialFormState);
  };

  return (
    <div className="card shadow-sm p-4 border-danger">
      <h2 className="mb-2 fw-bolder  text-danger h3">Add Expense</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="mb-1">
          <label
            htmlFor="expenseName"
            className="form-label text-dark fs-6 fw-bold"
          >
            Name
          </label>
          <input
            type="text"
            className="form-control form-control-sm  border border-dark"
            id="expenseName"
            name="expenseName"
            value={formData.expenseName}
            onChange={handleInputChange}
            placeholder="e.g. Grocery shopping"
          />
        </div>
        <div className="mb-1">
          <label
            htmlFor="expenseDate"
            className="form-label text-dark fs-6 fw-bold"
          >
            Expense Date
          </label>
          <input
            type="date"
            className="form-control form-control-sm border border-dark"
            id="expenseDate"
            value={formData.expenseDate}
            onChange={handleInputChange}
            name="expenseDate"
          />
        </div>

        <div className="mb-1">
          <label
            htmlFor="expenseDescription"
            className="form-label text-dark fs-6 fw-bold"
          >
            Description
          </label>
          <textarea
            className="form-control form-control-sm border border-dark"
            id="expenseDescription"
            name="expenseDescription"
            value={formData.expenseDescription}
            onChange={handleInputChange}
            rows="3"
            placeholder="Add any notes..."
          ></textarea>
        </div>

        <div className="mb-2">
          <label
            htmlFor="expenseAmount"
            className="form-label text-dark fs-6 fw-bold"
          >
            Amount
          </label>
          <input
            type="number"
            className="form-control form-control-sm  border border-dark"
            id="expenseAmount"
            name="expenseAmount"
            value={formData.expenseAmount}
            onChange={handleInputChange}
            placeholder="e.g. 2500"
          />
        </div>

        <div className="mb-2">
          <label
            htmlFor="expenseCategory"
            className="form-label text-dark fs-6 fw-bold"
          >
            Category
          </label>
          {/* <select
            className="form-select-sm  border border-dark"
            id="expenseCategory"
            name="expenseCategory"
            value={formData.expenseCategory}
            onChange={handleInputChange}
          >
            <option value="food">Food</option>
            <option value="transport">Transport</option>
            <option value="utilities">Utilities</option>
            <option value="entertainment">Entertainment</option>
            <option value="other">Other--</option>
          </select> */}
          <select
            className="form-select-sm border border-dark"
            id="expenseCategory"
            name="expenseCategory"
            value={formData.expenseCategory}
            onChange={handleInputChange}
            required
          >
            <option value="" disabled>
              -- Select Category --
            </option>
            <option value="food">Food</option>
            <option value="transport">Transport</option>
            <option value="utilities">Utilities</option>
            <option value="entertainment">Entertainment</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="mb-2">
          <button type="submit" className="btn btn-danger w-100">
            Add Expense
          </button>
        </div>
      </form>
    </div>
  );
}

export default ExpenseForm;
