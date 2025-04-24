import React from "react";

function ExpenseList({ expenses }) {
  return (
    <div className="mb-4 table-scroll">
      <div className="table-responsive table-responsive-large">
        <table className="table  table-hover table-striped align-middle caption-top">
        <caption>List of expenses</caption>
          <thead>
            <tr>
              <th scope="col">Expense Date</th>
              <th scope="col">Expense Name</th>
              <th scope="col">Expense Description</th>
              <th scope="col">Expense Category</th>
              <th scope="col">Actions</th>
              
            </tr>
          </thead>
          <tbody>
            {
              expenses.map((expense,index)=>(
                <tr key={index}>
                  <td>{expense.expenseDate}</td>
                  <td>{expense.expenseName}</td>
                  <td>{expense.expenseDescription}</td>
                  <td>{expense.expenseCategory}</td>
                  <td >
                    <button className="btn btn-danger">Delete</button>
                  </td>
                  
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ExpenseList;
