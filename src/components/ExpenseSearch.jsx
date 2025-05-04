import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function ExpenseSearch({handleFilterExpense}) {
 
  const [filterExpense, setFilterExpense] = useState("");
  const handleFilterInput = (e) => {
    const value = e.target.value.toLowerCase().trim();
    setFilterExpense(value);
    handleFilterExpense(value)

  
  };

  return (
    <div className="w-75">
      <div className="input-group mb-3">
        <span className="input-group-text bg-white border border-dark">
          <FontAwesomeIcon icon={faSearch} className="text-danger" />
        </span>
        <input
          type="text"
          className="form-control border border-dark"
          name="fiterExpense"
          value={filterExpense}
          onChange={handleFilterInput}
          placeholder="Search by expense name or description"
        />
      </div>
    </div>
  );
}

export default ExpenseSearch;
