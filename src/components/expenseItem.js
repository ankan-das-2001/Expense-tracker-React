import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { ExpenseDataContext } from '../ExpenseDataContext';

export default function ExpenseItem(props) {
  const { dispatch } = useContext(ExpenseDataContext);

  const handleDeleteExpense = () => {
    dispatch({
      type: 'DELETE_EXPENSE',
      payload: props.id,
    });
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {props.name}
      <div>
        <span className="badge text-bg-danger badge-primary rounded-pill mr-3">
          Rs. {props.cost} /-
        </span>
        <TiDelete size="1.5em" onClick={handleDeleteExpense}></TiDelete>
      </div>
    </li>
  );
}
