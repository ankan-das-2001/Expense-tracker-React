import React, { useState, useContext } from 'react';
import { ExpenseDataContext } from '../ExpenseDataContext';

export default function addBudget() {
  const { dispatch } = useContext(ExpenseDataContext);
  const [budget, setBudget] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();

    dispatch({
      type: 'EDIT_BUDGET',
      payload: parseInt(budget),
    });
    setBudget('');
  };
  return (
    <form onSubmit={onSubmit}>
      <div className="row">
        <div className="col-sm">
          <label for="budget">Set your budget</label>
          <input
            required="required"
            type="number"
            className="form-control"
            id="budget"
            value={budget}
            onChange={(event) => setBudget(event.target.value)}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-sm">
          <button className="btn btn-primary mt-3">Submit</button>
        </div>
      </div>
    </form>
  );
}
