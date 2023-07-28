import React from 'react';

export default function AddExpense(props) {
  return (
    <form>
      <div className="row">
        <div className="col-sm">
          <label for="name">Name</label>
          <input
            required="required"
            type="text"
            className="form-control"
            id="name"
          />
        </div>
        <div className="col-sm">
          <label for="cost">Cost</label>
          <input
            required="required"
            type="text"
            className="form-control"
            id="cost"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-sm">
          <button type="submit" className="btn btn-primary mt-3">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}
