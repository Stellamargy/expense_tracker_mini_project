import React from "react";

function ExpenseList({ expenses }) {
  return (
    <div className="mb-4 table-scroll">
      <div className="table-responsive table-responsive-large">
        <table className="table table-hover align-middle caption-top fs-6   border rounded-4 border-dark ">
       
          <thead>
            <tr>
              <th scope="col" className="text-danger">Date</th>
              <th scope="col" className="text-danger"> Name</th>
              <th scope="col" className="text-danger"> Amount</th>
              <th scope="col" className="text-danger"> Description</th>
              <th scope="col" className="text-danger">Category</th>
              <th scope="col" className="text-danger">Actions</th>
              
            </tr>
          </thead>
          <tbody>
            {
              expenses.map((expense,index)=>(
                <tr key={index}>
                  <td className="p-1">{expense.expenseDate}</td>
                  <td className="p-1">{expense.expenseName}</td>
                  <td className="p-1">{`$ ${expense.expenseAmount}`}</td>
                  <td className="p-1">{expense.expenseDescription}</td>
                  <td className="p-1">{expense.expenseCategory}</td>
                  <td className="p-1">
                    <button className="btn btn-sm  btn-danger ">Delete</button>
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
