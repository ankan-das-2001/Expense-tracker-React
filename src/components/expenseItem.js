import React from 'react';
import {TiDelete} from 'react-icons/ti';

export default function ExpenseItem(props) {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {props.name}
      <div>
        <span className="badge text-bg-danger badge-primary rounded-pill mr-3">
					Rs. {props.cost} /-
				</span>
        <TiDelete size="1.5em"></TiDelete>
      </div>
    </li>
  );
}
