import React from "react";

function ExpenseList() {
  return (
    <div className="expense-list-container mt-3">
      <table className="table  table-striped">
        <thead className="table-dark">
          <tr>
            <th scope="col">Expense Name</th>
            <th scope="col">Expense Amount</th>
            <th scope="col">Expense Category</th>
            <th scope="col">Expense Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ExpenseList;
