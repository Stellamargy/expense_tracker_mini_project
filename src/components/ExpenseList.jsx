import React from "react";

function ExpenseList({expenses}) {
  return (
    <div className="mb-4">
      <div className="table-responsive table-responsive-large">
      <table className="table table-secondary table-hover table-striped">
        <thead>
          <tr>
            <th scope="col">Expense Date</th>
            <th scope="col">Expense Name</th>
            <th scope="col">Expense Description</th>
            <th scope="col">Expense Category</th>
            
          </tr>
        </thead>
      </table>
    </div>
    </div>
  );
}

export default ExpenseList;
