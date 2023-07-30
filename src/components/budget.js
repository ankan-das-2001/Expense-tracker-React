import React, { useContext } from 'react';
import { ExpenseDataContext } from '../ExpenseDataContext';

export default function Budget(props) {
  const { budget } = useContext(ExpenseDataContext); // { budget } means destructuring. We can also make it name as data and get value of budget by calling data.budget.

  return (
    <div className="alert alert-secondary budget-style">
      <span>Budget: {budget}/-</span>
    </div>
  );
}
