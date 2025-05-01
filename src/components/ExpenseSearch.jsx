import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch  } from '@fortawesome/free-solid-svg-icons';

function ExpenseSearch() {
  return (
    <div className="w-75">
    <div className="input-group mb-3">
      <span className="input-group-text bg-white border border-dark">
        <FontAwesomeIcon icon={faSearch} className='text-danger' />
      </span>
      <input
        type="text"
        className="form-control border border-dark"
        placeholder="Search by expense name or description"
      />
    </div>
  </div>

  )
}

export default ExpenseSearch
